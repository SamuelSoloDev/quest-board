import { useState } from "react";
import {SelectField} from '../generic-components/selectField.jsx';


export function TagSelector() {
  const Tags = [{name: "Healt"}, {name: "Fitness"}, {name: "Art"}]
  const [tag, setTag] = useState("");

  function updateTag(e) {
    setTag(e.value);
  }

  return(
    <SelectField
    options={Tags}
    value={tag}
    onChange={updateTag}>
    </SelectField>
  )
}