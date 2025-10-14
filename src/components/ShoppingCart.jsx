import React, { useState } from "react";

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [itemAbout, setItemAbout] = useState({ name: "", quantity: 0 });

  const handleChange = (e) => {
    const { name = "", value = "" } = e.target;
    setItemAbout({ ...itemAbout, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemAbout.name === "" || itemAbout.quantity === 0) return;
    setItems([...items, itemAbout]);
    setItemAbout({ name: "", quantity: 0 });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Item Name:
            <input
              type="text"
              name="name"
              value={itemAbout.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Item Quantity:
            <input
              type="number"
              name="quantity"
              value={itemAbout.quantity}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Add Item in Cart</button>
        </form>
      </div>
      <div>
        {items.length > 0 &&
          items.map((item, index) => (
            <li key={index}>{`${item.name} have Qty:${item.quantity}`}</li>
          ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
