import { lazyLoad } from 'utils/loadable'

export const DetailPage = lazyLoad(
  () => import('./index'),
  module => module.DetailPage,
)
