import { useState } from 'react'


export function StreakVisualizer({currentStreak}){

  return (
    <div className="mt-2 font-bold
    text-2xl
    text-white
    row-start-2 col-start-2 col-span-2">
  🔥 Racha actual: {currentStreak>0 ? currentStreak : "--"}
</div>

  )

}