
export function handlePerfectDay(currentStreak) {

  let lastPerfectDay = localStorage.getItem("lastPerfectDay");
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate - 1)

  if (!lastPerfectDay) {
    currentStreak = 1;
  }

  if (lastPerfectDay === new Date().toDateString()) {
    return currentStreak
  }

  if (lastPerfectDay === yesterday) {
    currentStreak += 1;
  }
  else {
    currentStreak = 1;
  }

  return currentStreak;
}