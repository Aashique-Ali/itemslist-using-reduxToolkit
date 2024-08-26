import { useState } from "react"
import AddItem from "./components/AddItem"
import ItemList from "./components/ItemList"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="mt-5">
        <AddItem />
        <ItemList />
      </div>
    </>
  )
}

export default App
