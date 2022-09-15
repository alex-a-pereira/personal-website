import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// screens
import { HomeScreen } from './screens/HomeScreen/HomeScreen'
import { ArticleScreen } from './screens/ArticleScreen/ArticleScreen'

export const AppNavigationContainer = React.memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/articles/:slug' element={<ArticleScreen />} />
        <Route path='/' element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  )
})

AppNavigationContainer.displayName = 'AppNavigationContainer'
