/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import { GlobalStyle } from 'styles/global-styles'

import { HomePage } from './pages/HomePage/Loadable'
import { NotFoundPage } from './components/NotFoundPage/Loadable'
import { useTranslation } from 'react-i18next'
import { DetailPage } from './pages/DetailPage'

export function App() {
  const { i18n } = useTranslation()
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - CATalog"
        defaultTitle="CATalog"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="breed/:name" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}
