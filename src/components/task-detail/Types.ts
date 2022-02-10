import { TableColumn } from "components/tasks-datatable/Types"
import { Task } from "models/Task.interface"

export interface TaskDetailProps {
  open: boolean
  task: Task
  title?: string
  readOnly: boolean
  onClose: () => void
  onClaim: () => void
  onComplete: () => void
  onSave: (task: Task) => void
  onSnooze: () => void
  onAssign: () => void
  onUnclaim: () => void
  onAction: (type: string) => void
}
