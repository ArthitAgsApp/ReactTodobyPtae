import { FC, useState } from "react";

const Todo: FC = () => {
    const [inputv1, setInput] = useState("");
  const [values, setValues] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues([e.target.value]);
  };

  const handleAddValue = () => {
    setValues([...values, inputv1]);
  };

  const delvalue = (index:number) => {
    setValues((prevValues) => prevValues.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo List.</h1>

      <input
        name="v1"
        type="text"
        placeholder="Enter your data"
        onChange={(e)=>setInput(e.target.value) }
        value={inputv1}
      />

      <button onClick={handleAddValue}>add</button>

      <div>
        {values.map((item, index) => (
          <li key={index}>{item}  <button onClick={() => delvalue(index)}>delete</button></li>
        ))}
      </div>
    </div>
  );
};

export default Todo;
