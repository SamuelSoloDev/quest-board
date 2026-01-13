import { useState } from 'react'
import { useEffect } from "react";
import { useGoal } from "./context/goalContext.jsx";
import QuestForm from "./form/form.jsx";
import Modal from "./generic-components/Modal.jsx"
import List from "./list.jsx"
import ProgressBar from "./progressBar.jsx"
import { StatsPanel } from "./ui/statsPanel.jsx";
import { SelectGoal } from "./ui/selectGoal.jsx";
import { DateMonitor } from "./ui/dateMonitor.jsx";
import { sortedListByPriority } from "./functions/calcPriority.js";
import { handlePerfectDay } from "./functions/handlePerfectDay.js";
import { applyQuestReward } from "./functions/statsManager.js";
import { DEFAULT_STATS } from "./data/stats.js";
import { StreakVisualizer } from "./ui/streakVisualizer.jsx";

import './App.css'
import { parse } from 'dotenv';

function App() {

  //get global Goal State
const { goal, setGoal } = useGoal();

const [modalState, setModalState] = useState(false);

const [goalStateSelector, setGoalStateSelector] = useState(false);

const [statsPanelState, setStatsPanelState] = useState(false);

const [currentDay, setCurrentDay] = useState(() => {
  const savedDay = localStorage.getItem("Date");

  return savedDay ?? new Date().toDateString();
});


const [currentStreak, setCurrentStreak] = useState(() => {
  const savedStreak = localStorage.getItem("streak");

  return savedStreak ? Number(savedStreak) : 0;
});


const [stats, setStats] = useState(() => {
  const savedStats = localStorage.getItem("stats");

  return savedStats ? JSON.parse(savedStats) : DEFAULT_STATS;
});


function onDayChange(day) {
  if (isPerfectDay) {
    setCurrentStreak(prevStreak => handlePerfectDay(prevStreak))
    localStorage.setItem("lastPerfectDay", currentDay)
    localStorage.setItem("streak", currentStreak)
  }

  saveDate(day)
  setCurrentDay(day)
}

useEffect(() => {
  localStorage.setItem("stats", JSON.stringify(stats));
}, [stats]);

useEffect(() => {
  if (currentDay !== localStorage.getItem("Date")) {
    setQuests(prevQuests =>
    prevQuests.map(quest => ({
      ...quest,
      state: false,
      rewardedToday: false,
    }))
  );
  }
}, [currentDay]);



function changeDay() {


  setCurrentDay(yesterday.toDateString());
}



function saveDate(Date) {
  localStorage.setItem("Date", Date)
}

 // Cargar el goal desde localStorage al iniciar la app
useEffect(() => {
  const storedGoal = localStorage.getItem("goal");
  if (storedGoal) {
    setGoal(JSON.parse(storedGoal));
  }
}, [setGoal]);

// Guardar el goal en localStorage cada vez que cambie
useEffect(() => {
  if (goal !== null) {
    localStorage.setItem("goal", JSON.stringify(goal));
  } else {
    localStorage.removeItem("goal");
  }
}, [goal]);


  const initialQuest = localStorage.getItem("quest")
  const parseQuest = initialQuest ? JSON.parse(initialQuest) : []
  const [quests, setQuests] = useState(parseQuest)


  function addQuest(newQuest) {
    const newQuestWithId = {
      name: newQuest.name,
      type: newQuest.type,
      tag: newQuest.tag,
      state: false, // siempre inicia en false
      id: crypto.randomUUID(),
      priority: 1,
      rewardedToday: false
    }
    console.log(newQuestWithId);
    const newQuestlist = [...quests, newQuestWithId]

    setQuests(newQuestlist)
    console.log(quests);
    closeModal();
  }

  function deleteQuest(id) {
    console.log(id);

    setQuests(quests.filter((quest) => quest.id !== id ))
    console.log(id);

  }

  function saveToLocalStorage(quests) {
    localStorage.setItem("quest", JSON.stringify(quests))
  }

  function isPerfectDay() {
  return quests.length > 0 && quests.every(q => q.state);
}
  function changeStreak(currentStreak) {
    setCurrentStreak(currentStreak)
  }
const perfectDay = isPerfectDay();


  useEffect(() => {

    saveToLocalStorage(quests);
  }, [quests]);

  function checkQuest(id) {
  setQuests(prev =>
    prev.map(q => {
      if (q.id !== id) return q;

      const newState = !q.state;

      if (newState && !q.rewardedToday) {
        setStats(prevStats => applyQuestReward(prevStats, q));
        return { ...q, state: true, rewardedToday: true };
      }

      return { ...q, state: newState };
    })
  );
}

function openModal() {
  setModalState(true)
  console.log("abierto");

}
function closeModal() {
  setModalState(false)
  console.log("cerrado");
}

function openGoalSelector(){
  setGoalStateSelector(true)
  console.log("Abierto");
}

function closeGoalSelector() {
  setGoalStateSelector(false);
  console.log("Cerrado");
}

function openStatsPanel() {
  setStatsPanelState(true)
  console.log("abierto");
}

function closeStatsPanel() {
  setStatsPanelState(false);
  console.log("cerrado");
}
  return (
    <div  className="w-screen h-dvh overflow-hidden
    m-0
    relative
    grid  grid-cols-4 grid-rows-4 place-items-center items-center justify-center
    bg-[#1A120B] ">


<div className='
col-start-1 col-span-4
grid grid-cols-4 grid-rows-3 gap-3
h-full w-full
justify-center
items-center
mt-3
'>

  <DateMonitor  onDayChange={onDayChange} currentDay={currentDay}></DateMonitor>
  <button
  onClick={() => openModal() }
  title="Add New"
  className="group cursor-pointer outline-none hover:rotate-90 duration-300*
  m-0 h-14 w-14
  row-start-2 col-start-1"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className=" w-full h-full
    stroke-green-400 fill-none
     group-hover:fill-green-800
     group-active:stroke-green-200
     group-active:fill-green-600 group-active:duration-0 duration-300"
  >
    <path
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      stroke-width="1.5"
    ></path>
    <path d="M8 12H16" stroke-width="1.5"></path>
    <path d="M12 16V8" stroke-width="1.5"></path>
  </svg>
</button>



{modalState && (
        <Modal>
          <div className="modal h-full w-full
          px-2 pb-2
          bg-gray-600 rounded-md
          relative
          flex flex-col gap-2">
             <button className='text-white
             border border-amber-50 rounded-full bg-rose-500
             w-9 h-9
             flex justify-center items-center
             relative top-1 ' onClick={() => closeModal() }>
              <svg
  className="w-8 h-8"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg>

            </button>
            <QuestForm eventOnSubmit={addQuest} ></QuestForm>

          </div>
        </Modal>
)}

<div className='w-full h-14
flex flex-row justify-center items-center
row-start-1 col-start-2 col-span-2
bg-[#8b4513]
p-0
border border-red-900 rounded-full'>
  <button className='w-14 h-full border-r
  flex justify-center items-center
   border-black' onClick={()=> openGoalSelector()}>
  <svg
  className="w-12 h-12 m-0 text-white
   click:rotate-180 transition-transform duration-300
"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M3 12a9 9 0 0 1 15-6" />
  <polyline points="18 3 18 9 12 9" />
  <path d="M21 12a9 9 0 0 1-15 6" />
  <polyline points="6 21 6 15 12 15" />
</svg>
</button>
<div className='flex-1 flex justify-center items-center'>
  <p className='text-white uppercase font-bold text-3xl
mr-3'>{goal?.name}</p>
</div>

</div>


{goalStateSelector && (
  <Modal>
    <button className='text-white
             border border-amber-50 rounded-full bg-rose-500
             w-9 h-9
             flex justify-center items-center
             relative top-1 ' onClick={() => closeGoalSelector() }></button>
    <SelectGoal>
    </SelectGoal>
  </Modal>
)}

{perfectDay && (
  <div className="mt-2 text-green-600 font-semibold">
    ✔ Día perfecto
  </div>
)}
<StreakVisualizer
currentStreak={currentStreak}
perfectDay={perfectDay}
changeStreak={changeStreak}></StreakVisualizer>
</div>

    <div className=' h-[90%] w-[90%]
    col-span-4 row-start-2 row-span-4 flex flex-col
    gap-3 p-3
     bg-[#8b4513] rounded-sm'>
       <ProgressBar list={quests}></ProgressBar>
       <List
       questList={sortedListByPriority(quests, goal)}
       checkQuest={checkQuest}
       deleteQuest={deleteQuest}></List>
       <button className='h-20 text-white uppercase font-bold text-3xl'
       onClick={openStatsPanel}>STATS</button>
       {statsPanelState && (
        <Modal>
          <button className='text-white
             border border-amber-50 rounded-full bg-rose-500
             w-9 h-9
             flex justify-center items-center
             relative top-1 ' onClick={() => closeStatsPanel() }>
              <svg
  className="w-8 h-8"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg>

            </button>
          <StatsPanel stats={stats}>
          </StatsPanel>
        </Modal>
       )}
    </div>
   </div>
  )
}

export default App
