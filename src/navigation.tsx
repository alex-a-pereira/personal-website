import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// UI
import { SiteHeader } from './components/SiteHeader/SiteHeader'
import { SiteFooter } from './components/SiteFooter/SiteFooter'
// screens
import { HomeScreen } from './screens/HomeScreen/HomeScreen'
import { ArticleScreen } from './screens/ArticleScreen/ArticleScreen'

export const AppNavigationContainer = React.memo(() => {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path='/articles/:slug' element={<ArticleScreen />} />
        <Route path='/' element={<HomeScreen />} />
      </Routes>
      <SiteFooter />
    </BrowserRouter>
  )
})

AppNavigationContainer.displayName = 'AppNavigationContainer'
