import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginScreen from "./pages/LoginScreen"
import NewNote from "./pages/NewNote"
import RegisterScreen from "./pages/RegisterScreen"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registro" element={<RegisterScreen/>}/>
        <Route path="/login" element={<LoginScreen/>}/>
        <Route path="/nova-nota" element={<NewNote/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
