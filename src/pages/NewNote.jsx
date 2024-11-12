import Navbar from "./components/Navbar"
import WriteSection from "./components/WriteSection"
import Aside from "./components/Aside"

function NewNote() {
  return (
    <div className="page-container">
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

export default NewNote
