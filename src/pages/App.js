import { BrowserRouter } from "react-router-dom"
import { Main } from "./Main"
import { useState, useEffect } from "react"


const App = () => {
  const [loading, setLoading] = useState(false)
  const [sidebarVis, setSidebarVis] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
        <Main
          useState={useState} useEffect={useEffect}
          loading={loading} setLoading={setLoading}
          sidebarVis={sidebarVis} setSidebarVis={setSidebarVis}
        />
      </BrowserRouter>
    </div>
  )
}

export default App