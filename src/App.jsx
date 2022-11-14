import { useState } from 'react'
import Navigation from './Components/Navigation/Navigation'
import Sidebar from './Components/Sidebar/Sidebar'
import Chips from './Chips/Chips'
import Videos from './Components/Videos/Videos'
import './global.css'

function App() {
  const [lgCollapsed, setLgCollapsed] = useState(false)

  return (
    <div className="App">
      <Navigation setLgCollapsed={setLgCollapsed} />
      <Sidebar lgCollapsed={lgCollapsed} />
      <Chips />
      <Videos />
    </div>
  )
}

export default App
