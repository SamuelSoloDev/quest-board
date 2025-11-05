import { useState } from 'react'

function QuestForm({eventOnSubmit}) {
  const [quest, setQuest] = useState({
    name: "",
    type: "positive",
    state: false
  });

  function updateInput(e) {
    const {name, value} = e.target;
    setQuest({
      ...quest,
      [name]: value
    });
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

    setQuest({ name: "", type: "positive", state: false }); // limpiar el formulario
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      name= "name"
      placeholder='Make a new quest'
      value={quest.name}
      onChange={updateInput} />

      <select name="type" value={quest.type} onChange={updateInput}>
        <option value="positive">Positive</option>
        <option value="negative">Negative</option>
      </select>

      <button type='submit'>Create Quest</button>
    </form>
  )
}

export default QuestForm;