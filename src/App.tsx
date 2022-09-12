import React from 'react'
import { Counter } from './components/Counter/Counter'

import myImage from './assets/sample.png'

const App = () => {
  return (
    <div>
      <h1>Create React App from Scratch Using Typescript..!!</h1>
      <img src={myImage} />
      <Counter />
    </div>
  )
}
export default App
