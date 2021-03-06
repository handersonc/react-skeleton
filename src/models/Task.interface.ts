import { TaskComment } from "./TaskComment.interface"
import { TaskHistoryItem } from "./TaskHistoryItem.inteface"

export enum TaskStatus {
  UNDEFINED = "undefined",
  ASSIGNED = "assigned",
  NEW = "new",
  OVERDUE = "Overdue",
}

export enum TaskPriority {
  UNDEFINED = "undefined",
  NORMAL = "normal",
  URGENT = "urgent",
}

export interface Task {
  id?: number
  taskName: string
  jobNumber: number
  processName: string
  name: string
  dueDate: string | undefined
  status: "assigned" | "overdue" | "complete" | "snoozed" | undefined
  priority: "normal" | "urgent" | "high" | undefined
  comments?: Array<TaskComment>
  history?: Array<TaskHistoryItem>
  earliestVideoOrderDays: number | undefined
  earliestVideoOrderDueDate: string | undefined
  division: string
  caseName: string | undefined
  assignedTo: string
  retainNextTask?: boolean
  isYesPath?: boolean
}
