import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  // Add item to the list
  function addItem() {
    if (inputText.trim() !== "") {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
      setInputText("");
    }
  }

  // Remove item from the list
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => index !== id);
    });
  }

  // Clear all items from the list
  function clearList() {
    setItems([]);
  }

  // Add item by pressing the Enter key
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      addItem();
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      {/* Input and Add Button */}
      <div className="form">
        <input
          onChange={handleChange}
          onKeyPress={handleKeyPress} // Add item on Enter key press
          type="text"
          value={inputText}
          placeholder="Add a new task"
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>

      {/* Clear All Button */}
      {items.length > 0 && (
        <button className="clear-btn" onClick={clearList}>
          Clear All
        </button>
      )}

      {/* List of items */}
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <li key={index}>
              {todoItem}{" "}
              <button className="delete-btn" onClick={() => deleteItem(index)}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
