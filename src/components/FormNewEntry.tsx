import { useState } from "react";
import { FormProps } from "../interfaces/Interface";

const FormNewEntry: React.FC<FormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState<number>(0);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit({ name, desc, price });
    }
    setName("");
    setDesc("");
    setPrice(0);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Desc</label>
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} />

        <label>Price</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormNewEntry;
