const DEFAULT_STATS = {
  vitality: 0,
  strength: 0,
  creativity: 0,
  intelligence: 0,
  expertise: 0,
  resilience: 0,
  charisma: 0,
  balance: 0,
  joy: 0,
};

const QUEST_TO_STAT = {
  Health: "vitality",
  Fitness: "strength",
  Art: "creativity",
  Learning: "intelligence",
  Career: "expertise",
  Personal: "resilience",
  Social: "charisma",
  Life: "balance",
  Fun: "joy",
};

export {QUEST_TO_STAT, DEFAULT_STATS}