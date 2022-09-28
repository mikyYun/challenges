import React from "react";

const ChildInput = ({ value, changeValue, common, updateCommon }) => {
  // update state from parent makes rerender parents and child (changeValue) 
  const [otherVal, setOtherVal] = React.useState(value);
  const updateOtherVal = (val) => { // update sate inside child rerender child only
    console.log("INSIDE")
    setOtherVal(val.target.value)
  }
  console.log("CHILDINPUT") // extension update. backend.js in console OR Components/debugging/check 'hide logs during second render in Strict Mode' #2
  React.useEffect(() => {
    console.log("UPDATED Child's OTHERVALUE || Parent's VALUE")
  }, [otherVal, value])

  // first onchange event rerender parent and child
  // second onchange event rerender child only

  return (
    <React.Fragment>
      <input value={value} onChange={(e) => changeValue(e)}></input>
      <input value={otherVal} onChange={(e) => updateOtherVal(e)}></input>
      <input type="text" onChange={() => updateCommon()} />
    </React.Fragment>
  );
};

export default ChildInput;
