// React Imports
import { useContext, useEffect, useState } from "react"

// Custom Imports
import TableAccordion from "components/table-accordion/TableAccordion"
import { TableAccordionProps } from "components/table-accordion/Types"

const accordionItems: Array<TableAccordionProps> = [
  {
    title: "Urgent Tasks",
    summaryColor: "#E35C5C",
  },
  {
    title: "Active Tasks",
    summaryColor: "#63B0F3",
  },
  {
    title: "Snoozed Tasks",
    summaryColor: "#FBD250",
  },
]

const MyTasksPage = () => {

  return (
    <div>
      <TableAccordion
        title={accordionItems[0].title}
        summaryColor={accordionItems[0].summaryColor}
      />
      <TableAccordion
        title={accordionItems[1].title} 
        summaryColor={accordionItems[1].summaryColor}
      />
      <TableAccordion
        title={accordionItems[2].title}
        summaryColor={accordionItems[2].summaryColor}
      />
    </div>
  )
}

export default MyTasksPage
