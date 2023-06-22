import { useEffect, useState } from "react";
import { TotalProps } from "../interfaces/Interface";

const Total: React.FC<TotalProps> = ({ entries }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  let count = 0;

  entries.forEach((element) => {
    count += element.price;
  });

  useEffect(() => {
    setTotalPrice(count);
  }, [entries]);

  return (
    <div>
      <div>Total:{totalPrice}</div>
    </div>
  );
};

export default Total;
