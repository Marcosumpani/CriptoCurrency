import './App.css'
import Home from './pages/home/'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import List from './pages/list';
import Info from './pages/info/information'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/list" Component={List} />
        <Route path="/info/:nome" Component={Info} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
