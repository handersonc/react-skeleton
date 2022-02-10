import { Task } from "models/Task.interface";

export interface TableColumn {
  field: string,
  headerName: string,
  width?: number,
  editable?: false,
}
export interface TaskDataTableProps {
  data: Array<Partial<Task>>
  columns: Array<TableColumn>
  readOnly?: boolean
}