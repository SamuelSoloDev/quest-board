
import { Option } from "./Option.jsx";

export function SelectField({options, value, onChange}) {



  return (
    <select name="goal" value={value} onChange={onChange}>
      {
        options.map(g =>(
        <Option
        name={g.name}
        key={g.name}
        >
        </Option>))
      }
    </select>
  )
}