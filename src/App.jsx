import { useState } from 'react'
import QuestForm from "./form.jsx";
import List from "./list.jsx"
import ProgressBar from "./progressBar.jsx"
import { GoalSelector } from "./goalSelector.jsx";
import './App.css'

function App() {
  const initialQuest = localStorage.getItem("quest")
  const parseQuest = initialQuest ? JSON.parse(initialQuest) : []
  const [quests, setQuests] = useState(parseQuest)

  function addQuest(newQuest) {
    const newQuestWithId = {
      name: newQuest.name,
  type: newQuest.type,
  state: false, // siempre inicia en false
  id: crypto.randomUUID()
    }
    console.log(newQuestWithId);
    const newQuestlist = [...quests, newQuestWithId]
    localStorage.setItem("quest", JSON.stringify(newQuestlist))
    setQuests(newQuestlist)
    console.log(quests);

  }

  function deleteQuest(id) {
    console.log(id);

    setQuests(quests.filter((quest) => quest.id !== id ))
    console.log(id);

  }

  function checkQuest(id) {
  setQuests(prevQuests =>
    prevQuests.map(quest =>
      quest.id === id
        ? { ...quest, state: !quest.state } // crea una nueva copia del objeto modificado
        : quest // devuelve el mismo si no coincide
    )
  );
}

console.log(parseQuest);

  return (
    <div  className="w-screen h-dvh overflow-hidden
    grid gap-2 grid-cols-12 grid-rows-9 place-items-center
    bg-gray-900 border border-amber-300">
    <GoalSelector></GoalSelector>
    <QuestForm eventOnSubmit={addQuest} ></QuestForm>
    <List questList={quests} checkQuest={checkQuest} deleteQuest={deleteQuest}></List>
    <ProgressBar list={quests}></ProgressBar>
    </div>
  )
}

export default App
