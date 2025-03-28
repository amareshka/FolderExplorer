import './App.css'
import Folder from './components/Folder'
import explorer from "./data/explorer"

function App() {

  return (
    <>
      <h4>Welcome to file explorer</h4>
      <Folder explorer={explorer} />
    </>
  )
}

export default App
