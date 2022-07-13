import React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './app'
// import { getFolderStructure } from './utils/file'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// const fsa = getFolderStructure()
// console.log('ddd', fsa)
const rootElement = document.getElementById('root')
const renderApp = () => render(<App />, rootElement)
renderApp()
