import { useState } from "react";
import "./App.css";
import ItemInput from "./components/ItemInput";
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState([
    {
      id: "1",
      name: "Banana",
      completed: false,
    },
  ]);
  console.log(items);
  return (
    <div className="App">
      <h2>Menu List</h2>
      <section>
        <ItemInput setItems={setItems} items={items} />
        <ItemList items={items} />
      </section>
    </div>
  );
}

export default App;
