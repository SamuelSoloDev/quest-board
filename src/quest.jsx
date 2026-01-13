import { useState } from 'react'
import FancyCheckbox from './checkBox.jsx'

function QuestItem({ name, type, tag, id, deleteQuest, checkQuest, state}) {

  function toggleQuest() {
    checkQuest(id)
  }

  return (
    <li id={id} className="flex gap-1
    bg-[#2d1e12]
     justify-center items-center border border-slate-200 shadow-sm rounded-xl">
      <div className='w-8 ml-1 flex justify-center'>
        <FancyCheckbox
          id={`quest-${id}`}
          checked={state}
          onChange={toggleQuest}
        />
      </div>
      <div className='flex-1 grid grid-cols-5 grid-rows-2
      border border-transparent rounded-lg w-full
      bg-[#d4af37]'>
        <h1 className='row-start-1 col-span-3 gap-3 ml-2
                       text-lg font-bold uppercase tracking-wide text-[#f4ebd0]'>{name}</h1>
        <p className='row-start-2 col-start-1 ml-3
                      text-[#A68A64]'>{tag}</p>
        <button className='relative col-start-5 row-start-1 row-span-2
        h-10 m-auto mx-2
        bg-[#EF5350] text-white rounded-lg p-auto  transition
' onClick={() => deleteQuest(id)}>Delete</button>
      </div>
    </li>
  );
}

export default QuestItem;