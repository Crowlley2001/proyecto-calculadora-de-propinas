import type { Dispatch } from "react"
import type { MenuItems}  from "../types"
import type { OrderActions } from "../reducerss/order.reducers"

type MenuItemsProps = {
    item : MenuItems,
    dispatch: Dispatch<OrderActions>
}

export default function MenuItems({item, dispatch} : MenuItemsProps) {
  return (
    <button
     className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between mb-5"
     onClick={() => dispatch({type: 'add-item', payload : {item}})}
    >
    <p>{item.name}</p>
    <p className="font-black">${item.price}</p>
    </button>
  )
}
