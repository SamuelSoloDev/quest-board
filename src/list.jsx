import { useState } from 'react'
import QuestItem from "./quest.jsx";

function List({questList, deleteQuest, checkQuest}) {

  return(
    <ul>
      {questList.map(q => (
        <QuestItem
          key={q.id}
          id={q.id}
          name={q.name}
          type={q.type}
          state={q.state}
          checkQuest={checkQuest}
          deleteQuest={deleteQuest}/>

      ))}
    </ul>
  )
}

export default List