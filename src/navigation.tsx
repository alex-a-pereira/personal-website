import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// screens
import { HomeScreen } from './screens/HomeScreen/HomeScreen'

export const AppNavigationContainer = React.memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  )
})

AppNavigationContainer.displayName = 'AppNavigationContainer'
