import { useState } from 'react'
import QuestItem from "./quest.jsx";
import { useGoal } from "./context/goalContext.jsx";

function List({questList, deleteQuest, checkQuest}) {


  return(
    <ul className='
    flex-1
    overflow-y-auto
    h-full w-full flex flex-col gap-4
    py-2 px-2 rounded-lg
    col-span-8 col-start-2 row-span-5'>
      {questList.map(q => (
        <QuestItem
          key={q.id}
          id={q.id}
          name={q.name}
          tag={q.tag.name}
          type={q.type}
          state={q.state}
          checkQuest={checkQuest}
          deleteQuest={deleteQuest}/>

      ))}
    </ul>
  )
}

export default List