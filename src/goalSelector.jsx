import { useState } from "react";
import { useGoal } from "./context/goalContext.jsx";
import { GoalOption } from "./goalOption.jsx";

export function GoalSelector() {
  const GoalList = [
    {name: "entrenar"},
    {name: "Dibujar"},
    {name: "programar"}
  ]

  const { goal, setGoal } = useGoal();

  function updateGoal(e) {
    setGoal(e.value)
  }

  return (
    <select name="goal" value={goal} onChange={updateGoal}>
      {
        GoalList.map(g =>(
        <GoalOption
        name={g.name}
        key={g.name}
        >
        </GoalOption>))
      }
    </select>
  )
}