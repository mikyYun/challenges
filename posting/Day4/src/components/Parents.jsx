import React from "react";
import ChildButton from "./ChildButton";
import ChildInput from "./ChildInput";

const Parents = () => {
  const [value, setValue] = React.useState(1)
  const [common, setCommon] = React.useState(0)
  const changeValue = (val) => {
    console.log(val.target.value)
    setValue(val.target.value)
  }
  console.log("PARENTS") // #1
  const updateCommon = () => {
    setCommon(common + 1)
  }


  React.useEffect(() => {
    // useEffect render twice because original behavior of the useEffect hook was changed to execute the effect twice instead of once.
    // Only occurs in development mode when strict mode is enabled
    console.log("PARENT RENDERED") // 1, 3

    return () => console.log("PARENT RENDERED") // 2
  }, [])
  /** useEffect called twice cause a problem
   * when we fetch data inside useEffect
   * 
   * How to solve?
   * remove React StrictMode
   */

  React.useMemo(() => {
    console.log("THIS IS MEMO")
  }, [common])


  


  return (
  <React.Fragment>
    <ChildButton common={common} updateCommon={updateCommon}/>
    <div>{common}</div>
    <ChildInput value={value} changeValue={changeValue} common={common} updateCommon={updateCommon}/>
  </React.Fragment>
  )
};

export default Parents;
