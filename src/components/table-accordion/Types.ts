import { Task } from "models/Task.interface";

export interface TableAccordionProps {
    title: string
    data?: Array<Task>
    summaryColor?: string
  }
  