export function StatsPanel({ stats }) {
  return (
    <section className="p-4 border rounded
    bg-[#8b4513]
    h-5/6
    flex flex-col gap-3
    ">
      <h1 className="font-bold text-amber-50 text-4xl
      ">Stats</h1>

      <ul className="space-y-1 text-sm flex flex-col gap-3">
        <li className="font-bold text-amber-50 text-3xl">🩺 Vitality: {stats.vitality}</li>
        <li className="font-bold text-amber-50 text-3xl">💪 Strength: {stats.strength}</li>
        <li className="font-bold text-amber-50 text-3xl">🎨 Creativity: {stats.creativity}</li>
        <li className="font-bold text-amber-50 text-3xl">📚 Intelligence: {stats.intelligence}</li>
        <li className="font-bold text-amber-50 text-3xl">💼 Expertise: {stats.expertise}</li>
        <li className="font-bold text-amber-50 text-3xl">🧘 Discipline: {stats.resilience}</li>
        <li className="font-bold text-amber-50 text-3xl">🗣️ Charisma: {stats.charisma}</li>
        <li className="font-bold text-amber-50 text-3xl">🌱 Balance: {stats.balance}</li>
        <li className="font-bold text-amber-50 text-3xl">🎮 Joy: {stats.joy}</li>
      </ul>
    </section>
  );
}
