import { useState } from 'react'
import { TagSelector } from "./formTagSelector";
import { TAGS } from "../data/tags.js";
function QuestForm({eventOnSubmit}) {
  const [quest, setQuest] = useState({
    name: "",
    type: "positive",
    state: false,
    tag: ""
  });


  function updateInput(e) {
    const {name, value} = e.target;
    setQuest({
      ...quest,
      [name]: value
    });
  }

  function handleTagChange(newTag) {
    let tag = TAGS[newTag]
    console.log(tag);

    setQuest(prev => ({
      ...prev,
      tag: tag
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (quest.name.trim() === "") return;
    const newQuest = {
      ...quest,
      state: quest.type === "positive" ? false : true,
    }
    eventOnSubmit(newQuest);
    console.log(newQuest);

    setQuest({ name: "", type: "positive", state: false, tag: ""}); // limpiar el formulario
  }

  return (
    <form onSubmit={handleSubmit} className='
    h-full
    w-full
    relative
    justify-center
    bg-gray-900
    border border-gray-700 rounded-md
    flex flex-col gap-5 px-5
    mx-auto'>
      <h1 className='text-4xl uppercase font-bold text-white'>New Quest</h1>
      <input
      className="bg-gray-700 text-gray-200
      border-0 rounded-md p-2 mb-4
    focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500
      transition ease-in-out duration-150"
      type="text"
      name= "name"
      placeholder='Make a new quest'
      value={quest.name}
      onChange={updateInput} />

      <select className="bg-gray-700 text-gray-200
      border-0 rounded-md p-2 mb-4
    focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500
      transition ease-in-out duration-150" name="type" value={quest.type} onChange={updateInput}>
        <option value="positive">Positive</option>
        <option value="negative">Negative</option>
      </select>
      <TagSelector
        tag={quest.tag}
        onChangeTag={handleTagChange}
      />
      <button className='bg-linear-to-r from-indigo-500 to-blue-500
       text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600
      transition ease-in-out duration-150' type='submit' disabled={!quest.tag}>Create Quest</button>
    </form>
  )
}

export default QuestForm;