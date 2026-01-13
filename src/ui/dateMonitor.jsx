import React, { useState, useEffect, useRef } from 'react';

export function DateMonitor({ onDayChange, currentDay}) {
  // 1. Guardamos la fecha actual (formateada para comparar solo el día)
  const [savedDate, setSavedDate] = useState(currentDay);

  const isFirstRun = useRef(true);

useEffect(() => {
  const interval = setInterval(() => {
    const today = new Date().toDateString();

    if (isFirstRun.current) {
      isFirstRun.current = false;
      setSavedDate(today);
      return;
    }

    if (today !== savedDate) {
      if (onDayChange) onDayChange(today);
      setSavedDate(today);
    }
  }, 10000);

  return () => clearInterval(interval);
}, [savedDate, onDayChange]);
  // El efecto se reinicia si savedDate cambia, asegurando que la comparación sea fresca

  function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
  });
}


  return (
    <div className="px-3 py-2 h-full rounded border bg-[#d4af37] text-white text-sm">
    <div className="flex items-center gap-2">
      <span className="opacity-60">📅</span>
      <span className="capitalize">
        {formatDate(savedDate)}
      </span>
    </div>
  </div>
  );
}
