import { useState } from "react";
import uuid from "react-uuid";
import Table from "./components/Table";
import FormNewEntry from "./components/FormNewEntry";
import Total from "./components/Total";
import { ItemsTable } from "./interfaces/Interface";

import "./App.css";

function App() {
  const [entries, setEntries] = useState<ItemsTable[]>([
    { id: uuid(), name: "Loto ticket", desc: "", price: 20 },
    { id: uuid(), name: "Beers", desc: "Party night \\o/", price: -15 },
    { id: uuid(), name: "Phone Bill", desc: "January", price: -29.99 },
  ]);

  const handleDelete = (id: string) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const handleSubmit = (formData: ItemsTable) => {
    const newEntry = {
      id: uuid(),
      name: formData.name,
      desc: formData.desc,
      price: Number(formData.price),
    };
    console.log(newEntry);
    setEntries([...entries, newEntry]);
  };

  return (
    <>
      <div>
        <Table entries={entries} onDelete={handleDelete} />
        <Total entries={entries} />
      </div>
      <div>
        <FormNewEntry onSubmit={handleSubmit} />
      </div>
    </>
  );
}

export default App;
