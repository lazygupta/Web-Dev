import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// eslint-disable-next-line react-refresh/only-export-components
function MyApp() {
  return (
    <div>
      <h1>This is a custom Message</h1>
    </div>
  )
}

const ReactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
}

const anotherElement = (
  <a href='https://google.com' target='_blank'> Visit google </a>
)

const reactnewElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Touch me,Please'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  {/* <MyApp/>  */}
  {/* The above syntax is for jsx , It uses bundler which improves the syntax */}
  {/* We can pass function defined in the same file */}
  <App/>
  {/* You can write anotherElement directly here but dont wrap it */}
  </>
  // reactnewElement
)