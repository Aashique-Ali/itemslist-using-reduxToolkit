// src/components/AddItem.js
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addItem } from "../features/itemsSlice"

const AddItem = () => {
  const [name, setName] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim()) {
      dispatch(addItem({ id: Date.now(), name }))
      setName("")
    }
  }

  return (
    <div className="w-[50%] mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center bg-slate-600 p-10 rounded-t-2xl"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add a new item"
          className="bg-slate-400 border-none outline-none w-full p-1 rounded text-white placeholder-white"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-slate-500 m-1 rounded-xl text-white hover:bg-slate-400"
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default AddItem
