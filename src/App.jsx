import Navbar from "./components/Navbar"
import WriteSection from "./components/WriteSection"
import Aside from "./components/Aside"
import EditBar from "./components/EditBar"

function App() {
  return (
    <div>
      <Navbar/>
      <div className="page-wrapper">
        <Aside/>
        <div className="note-wrapper">
          <WriteSection/>
        </div>
      </div>
    </div>
  )
}

export default App
