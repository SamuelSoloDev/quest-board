import { createContext, useContext, useState } from "react";


const GoalContext = createContext();

export function GoalProvider({ children }) {
  const [goal, setGoal] = useState(null);

  return (
    <GoalContext.Provider value={{ goal, setGoal }}>
      {children}
    </GoalContext.Provider>
  );
}

export function useGoal() {
  return useContext(GoalContext);
}
