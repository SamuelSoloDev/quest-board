import React, { useState, useEffect, useRef } from 'react';

export function DateMonitor({ currentDay}) {
  // 1. Guardamos la fecha actual (formateada para comparar solo el día)


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
        {formatDate(currentDay)}
      </span>
    </div>
  </div>
  );
}
