
import {SelectField} from '../generic-components/selectField.jsx';
import { TAGS } from "../data/tags.js";


export function TagSelector({tag, onChangeTag}) {
  const Tags = Object.values(TAGS);



  function updateTag(e) {
    onChangeTag(e.target.value);
    console.log(Tags);

  }

  return(
    <SelectField
    options={Tags}
    value={tag}
    onChange={updateTag}>
    </SelectField>
  )
}