import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Test from './Test.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />

//     <>  {/* this is <div></div> */}
//     <Test />
//     <h3>Heloo am back again</h3>
//     </>


//   </StrictMode>,

// )

const Method1 = React.createElement(                         //another method to write component <Method1 />
  'a',
  {href: 'https://google.com' , target: '_blank'},
  'Click for google website'
)
createRoot(document.getElementById('root')).render(
Method1
)