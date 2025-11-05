import { useState } from 'react'
import QuestForm from "./form.jsx";
import List from "./list.jsx"
import ProgressBar from "./progressBar.jsx"
import './App.css'

function App() {
  const [quests, setQuests] = useState([])

  function addQuest(newQuest) {
    const newQuestWithId = {
      name: newQuest.name,
  type: newQuest.type,
  state: false, // siempre inicia en false
  id: crypto.randomUUID()
    }
    console.log(newQuestWithId);

    setQuests([...quests, newQuestWithId])
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


  return (
    <>
    <QuestForm eventOnSubmit={addQuest} ></QuestForm>
    <List questList={quests} checkQuest={checkQuest} deleteQuest={deleteQuest}></List>
    <ProgressBar list={quests}></ProgressBar>
    </>
  )
}

export default App
