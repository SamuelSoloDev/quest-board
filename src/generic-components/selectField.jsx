export function SelectField({options, value, onChange}) {
  return (
    <select
    className="bg-gray-700 text-gray-200

      transition ease-in-out duration-500
      block w-full px-3 py-2.5 bg-neutral-secondary-medium
       border-default-medium text-heading text-sm rounded-base
      focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
      name="goal" value={value} onChange={onChange}>
      <option value="">Select a Tag</option>
      {
        options.map(g =>(
        <option
        value={g.name}
        key={g.name}
        > {g.name}
        </option>))
      }
    </select>
  )
}