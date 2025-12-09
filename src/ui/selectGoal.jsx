import { useState } from "react";
import { useGoal } from "../context/goalContext.jsx";
import {SelectField} from '../generic-components/selectField.jsx';


export function SelectGoal() {
  const Goals = [{name: "Healt"}, {name: "Fitness"}, {name: "Art"}]
  const {goal, setGoal} = useGoal;

  function updateGoal(e) {
    setGoal(e.value);
  }

  return(
    <SelectField
    options={Goals}
    value={goal}
    onChange={updateGoal}>
    </SelectField>
  )
}