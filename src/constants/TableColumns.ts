import { TableColumn } from "components/tasks-datatable/Types";

export const TABLE_COLUMNS: Array<TableColumn> = [
  {
    field: "jobNumber",
    headerName: "Job Number",
    width: 200,
    editable: false,
  },
  {
    field: "processName",
    headerName: "Process Name",
    width: 200,
    editable: false,
  },
  {
    field: "taskName",
    headerName: "Task Name",
    width: 200,
    editable: false,
  },
  {
    field: "taskDueDate",
    headerName: "Task Due Date",
    width: 200,
    editable: false,
  },
  {
    field: "taskStatus",
    headerName: "Task Status",
    width: 200,
    editable: false,
  },
  {
    field: "priority",
    headerName: "Priority",
    width: 200,
    editable: false,
  },
  {
    field: "earliestVideoOrderDays",
    headerName: "Earliest Video Order Days",
    width: 200,
    editable: false,
  },
  {
    field: "earliestVideoOrderDueDate",
    headerName: "Earliest Video Order Due Date",
    width: 200,
    editable: false,
  },
  {
    field: "caseName",
    headerName: "Case Name",
    width: 200,
    editable: false,
  },
  {
    field: "division",
    headerName: "Division",
    width: 200,
  },
]