// src/components/ItemList.js
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeItem } from "../features/itemsSlice"

const ItemList = () => {
  const items = useSelector((state) => state.items)
  const dispatch = useDispatch()

  return (
    <ul className="flex flex-col min-h-[50vh] justify-center items-center bg-slate-400 w-[50%] mx-auto mt-1 p-2 rounded-b-2xl">
      {items.map((item) => (
        <li
          key={item.id}
          className="bg-slate-500 w-[80%] mb-1 p-2 rounded flex justify-between items-center text-white text-xl"
        >
          {item.name}
          <button
            onClick={() => dispatch(removeItem(item.id))}
            className="bg-red-600 px-4 py-2 rounded-full hover:bg-red-500 text-white"
          >
            x
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ItemList
