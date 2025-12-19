import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center border-b py-3">
      <h4 className="font-semibold">{item.title}</h4>

      <input
        type="number"
        min="1"
        value={item.quantity}
        className="w-16 border px-2"
        onChange={(e) =>
          dispatch(
            updateQuantity({
              id: item.id,
              qty: Number(e.target.value),
            })
          )
        }
      />

      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="text-red-400 hover:underline"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
//Cart item component