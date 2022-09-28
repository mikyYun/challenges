import React from "react";

const ChildButton = ({ common, updateCommon }) => {
  const [stateI, setStateI] = React.useState(0);
  let i = 0;
  React.useEffect(() => {
    // i ++;
    console.log("CLICK");
    return () => console.log("UNMOUNT");
  }, [i]);

  React.useEffect(() => {
    // i ++;
    console.log("stateI Clicked");
    return () => console.log("stateI Click unmounted");
  }, [stateI]);

  const callBack = React.useCallback(() => {
    console.log("CALLBACK");
    // setStateI(stateI + 1);
  }, []);

  return (
    <div>
      <button onClick={() => i++}>Increase Variable</button>
      <span style={{ marginLeft: "20px" }}>{i}</span>
      <br />
      <button onClick={callBack}>CALLBACK</button>
      <span style={{ marginLeft: "20px" }}>{i}</span>
      <br />
      <button onClick={() => setStateI(stateI + 1)}>Increase State</button>
      <span style={{ marginLeft: "20px" }}>{stateI}</span><br />
      <button onClick={() => updateCommon()}>Common</button>
    </div>
  );
};

export default ChildButton;
