import { Task } from "models/Task.interface";

export interface TableColumn {
  field: string,
  headerName: string,
  width?: number,
  editable?: false,
}
export interface TaskDataTableProps {
  data: Array<Task>
  columns: Array<TableColumn>
}