import {QUEST_TO_STAT} from "../data/stats";

export function applyQuestReward(stats, quest) {
  if (quest.rewardedToday) return stats;

  const statKey = QUEST_TO_STAT[quest.tag.id];
  if (!statKey) return stats;

  return {
    ...stats,
    [statKey]: stats[statKey] + 1,
  };
}