import { useState } from 'react'


function QuestItem({ name, type, id, deleteQuest, checkQuest, state }) {


  function toggleQuest() {
    checkQuest(id)
  }

  return (
    <li id={id}>
      <p>{name}</p>
      <input type="checkbox" checked={state} onChange={toggleQuest} />
      <button onClick={() => deleteQuest(id)}>Delete</button>
    </li>
  );
}

export default QuestItem;