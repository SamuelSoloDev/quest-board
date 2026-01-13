import { GOALS } from "./goals.js";
import { healthId, artId, fitnessId } from "./id.js";

export const TAGS = {
  Training : {id: fitnessId, name: "Training", goal: GOALS["FITNESS"]},
  Cardio : {id: fitnessId, name: "Cardio", goal: GOALS["FITNESS"]},
  Mobility: {id: fitnessId, name: "Mobility", goal: GOALS["FITNESS"]},
  Drawing: {id: artId, name: "Drawing", goal: GOALS["ART"]},
  Painting: {id: artId, name: "Painting", goal: GOALS["ART"]},
  Technique: {id: artId, name: "Technique", goal: GOALS["ART"]},
  Nutrition: {id: healthId, name: "Nutrition", goal: GOALS["HEALTH"]},
  Habits: {id: healthId, name: "Habits", goal: GOALS["HEALTH"]},
  Selfcare: {id: healthId, name: "Selfcare", goal: GOALS["HEALTH"]}
}

// nota ponerle un id a los tags al los Goals
// y cambiar el calculo de prioridad para que tenga en cuenta el id