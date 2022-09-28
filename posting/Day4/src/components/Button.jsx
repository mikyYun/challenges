import React from "react";

const Button = () => {
  const [count, setCount] = React.useState(0);
  const [count1, setCount1] = React.useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <span style={{ marginLeft: "20px" }}>{count}</span><br />
      <button onClick={() => setCount1(count1 + 1)}>Increase Count1</button>
      <span style={{ marginLeft: "20px" }}>{count1}</span><br />
    </div>
  );
};
export default Button;
