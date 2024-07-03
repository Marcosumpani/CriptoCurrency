import './App.css'
import Home from './pages/home/'
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        {/* <Route path="/" Component={} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
