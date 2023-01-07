import Home from "./pages/home"
import { BrowserRouter, Route, Routes}from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/informacion-legal" element={<div>Informacion Legal</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
