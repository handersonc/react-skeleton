import { GridRowParams } from "@mui/x-data-grid"
import { Task } from "models/Task.interface"

export const evaluateRowClassName = (row: GridRowParams, selectedRows: Array<Task>) => {
  const selected = selectedRows.find((x) => x.id === row.id)
  const values = { ...row.row }
  return `${values.taskStatus}-Row ${values.isYesPath && "manual-gateway"}
      ${values.retainNextTask && "retained"} ${
  selected
    ? values.isYesPath
      ? "manual-gateway-selected"
      : values.retainNextTask
        ? "retained-selected"
        : ""
    : ""
}`
}
  
export const evaluateRowClassNameSearch = (row: GridRowParams) => {
  const values = { ...row.row }
  return `${values.taskStatus}-Row ${values.isYesPath && "manual-gateway"} ${
    values.retainNextTask && "retained"
  }`
}
  