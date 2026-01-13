const GOAL_MATCH_BONUS = 3;
const HIGH_IMPACT_BONUS = 2;
const FAIL_PENALTY_BONUS = 1;
const HIGH_IMPACT_THRESHOLD = 3;
const FAIL_COUNT_THRESHOLD = 3;
const BASE_PRIORITY = 1;
export function sortedListByPriority(questList, goal) {
  let newList = questList.map(quest => (calcPriority(quest, goal))).sort((a, b) => b.priority - a.priority);
 console.log(newList);

  return newList
}

export function calcPriority(quest, goal) {
  quest.priority = BASE_PRIORITY;
  if (quest.tag.id === goal?.id) {
    console.log("es igual");
    console.log(quest.tag.id);

    quest.priority += GOAL_MATCH_BONUS;
  }
  else {
    console.log("no es igual");
    console.log(quest);
  }

 /* if (quest.impact >= HIGH_IMPACT_THRESHOLD) {
    total += HIGH_IMPACT_BONUS;
  } */

 /* if (quest.failCount > FAIL_COUNT_THRESHOLD) {
    total += FAIL_PENALTY_BONUS;
  } */

  return quest
}
