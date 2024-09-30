import Navbar from "./components/Navbar"
import WriteSection from "./components/WriteSection"
import Aside from "./components/Aside"

function App() {
  return (
    <div>
      <Navbar/>
      <div className="page-wrapper">
        <Aside/>
        <WriteSection/>
      </div>
    </div>
  )
}

export default App
