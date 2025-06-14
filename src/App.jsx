

import './App.css'
import Body from './Components/Body'
import { ThemeProvider } from './Contexts/ThemeContext';
import { ColorBlindProvider } from './Contexts/ColorBlindContext';
function App() {

  return (
    <ThemeProvider>
      <ColorBlindProvider>
   <Body/>
   </ColorBlindProvider>
   </ThemeProvider>
  )
}

export default App
