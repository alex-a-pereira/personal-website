import React from 'react'

import { AppNavigationContainer } from './navigation'
import { SiteHeader } from './components/SiteHeader/SiteHeader'

const App = () => {
  return (
    <div>
      <SiteHeader />
      <AppNavigationContainer />
    </div>
  )
}
export default App
