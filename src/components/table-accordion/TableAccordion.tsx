// MUI Imports
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"

// Icons Imports
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

// Custom Imports
import { TableAccordionProps } from "./Types"
import TasksDataTable from "components/tasks-datatable/TasksDatatable"

// Emotion Imports
import styled from "@emotion/styled"

const StyledAccordionDetails = styled(AccordionDetails)({
  minHeight: "470px",
})

const StyledTypography = styled(Typography)({
  fontFamily: "Raleway",
  textTransform: "none",
  fontWeight: 700,
  fontSize: "1.25rem",
})

const StyledAccordionSummary = styled(AccordionSummary )(props => ({
  backgroundColor: props.color
}))

const TableAccordion = ({ title, summaryColor }: TableAccordionProps) => {
  return (
    <Accordion defaultExpanded={true}>
      <StyledAccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        color={summaryColor}
      >
        <StyledTypography>{title}</StyledTypography>
      </StyledAccordionSummary>
      <StyledAccordionDetails>
        <TasksDataTable data={[]} />
      </StyledAccordionDetails>
    </Accordion>
  )
}

export default TableAccordion
