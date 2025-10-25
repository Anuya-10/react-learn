import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
const ReactElement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',
    },
    children:'go to google',
}

const anotherElement=(
  <a href="https://www.google.com" target="_blank">
    goggle</a>
)
const anotherUser=" u r smart"
const reactElement= React.createElement(
  'a',
  {
    href:'https://www.google.com',
    target:'_blank',
  },
  'go to google',
  anotherUser
)
createRoot(document.getElementById('root')).render(
  //App()
  reactElement
)
