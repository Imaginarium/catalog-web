import {
  Badge,
  Popover,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  IconButton,
  Divider,
} from '@mui/material'
import { useFavoritesSlice } from 'app/pages/HomePage/slice/favorites'
import { selectFavorites } from 'app/pages/HomePage/slice/favorites/selectors'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { media } from 'styles/media'

interface Props {
  handleNavigation: (name?: string) => void
}

export default function Nav({ handleNavigation }: Props) {
  const dispatch = useDispatch()
  const { actions } = useFavoritesSlice()

  const favorites = useSelector(selectFavorites)

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const open = Boolean(anchorEl)

  /**
   * Gets the clicked element and sets it as the anchor element for the popover
   *
   * @param event Event trigerred when clicked on an element
   */
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    // TODO Why is Modal/Backdrop not stopping scroll?
    document.documentElement.style.overflowY = 'hidden'
    setAnchorEl(event.currentTarget)
  }

  /**
   * Closes the popover
   */
  const handleClose = () => {
    // TODO Why is Modal/Backdrop not stopping scroll?
    document.documentElement.style.overflowY = 'auto'
    setAnchorEl(null)
  }

  /**
   * Lists of elements on the favorites
   */
  const listElements = favorites.map(favorite => (
    <div key={`Div_${favorite.id}`}>
      <ListItem
        secondaryAction={
          <IconButton
            onClick={() => dispatch(actions.removeFromFavorites(favorite.id))}
          >
            <Icon className="material-icons trash">delete</Icon>
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton
          onClick={() => {
            setAnchorEl(null)
            handleNavigation(favorite.name)
          }}
        >
          <ListItemAvatar>
            <Avatar alt={`Avatar`} src={favorite.img} />
          </ListItemAvatar>
          <ListItemText primary={favorite.name} />
        </ListItemButton>
      </ListItem>
      <Divider />
    </div>
  ))

  return (
    <Wrapper>
      <NavItems>
        <NavItem onClick={() => handleNavigation()}>
          <p>Home</p>
        </NavItem>
      </NavItems>
      <IconButton>
        <Badge badgeContent={favorites.length} color="primary">
          <Icon className="material-icons" onClick={handleOpen}>
            favorite
          </Icon>
        </Badge>
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <PopoverContent>
          {favorites.length > 0 ? (
            <List>{listElements}</List>
          ) : (
            <EmptyFavorites>Nothing to show!</EmptyFavorites>
          )}
        </PopoverContent>
      </Popover>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding: 0 30px 0 20px;

  ${media.small`
  padding-inline: 10px;
  `}
`

const Icon = styled.span`
  color: white;

  &.trash {
    color: black;
  }
`

const NavItems = styled.div`
  padding-inline: 16px;

  ${media.small`
    display: none
  `}
`
const NavItem = styled.div`
  margin-inline: 10px;
  cursor: pointer;

  p {
    color: white;
    text-decoration: underline;
  }
`

const PopoverContent = styled.div`
  width: 30vw;
  height: 70vh;
  overflow-y: scroll; /* Add the ability to scroll */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none;
  }

  ${media.medium`
  width: 45vw;
  height: 50vh;
  `}

  ${media.small`
  width: 80vw;
  height: 70vh;
  `}
`

const EmptyFavorites = styled.span`
  display: flex;
  justify-content: center;
  padding-block: 16px;
`
