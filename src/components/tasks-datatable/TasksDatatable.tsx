// Emotion Imports
import styled from "@emotion/styled"

// MUI Icons Imports
import SearchIcon from "@mui/icons-material/Search"

// MUI Imports
import { alpha, TextField } from "@mui/material"
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

// Custom Imports
import { theme } from "../../theme"
import { TABLE_COLUMNS } from "../../constants/TableColumns"

import { Task } from "models/Task.interface";
import { TaskDataTableProps } from "./Types"


const DataTableWrapper = styled.div`
  width: "100%";
  display: "flex";
  alignitems: "center";
`

const SearchBox = styled(TextField)({
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  borderRadius: "3px",
  root: {
    "&::placeholder": {
      textAlign: "center"
    }
  },
  marginBottom: "7px"
})

const rows: GridRowsProp = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  { id: 3, col1: "MUI", col2: "is Amazing" },
]

const TasksDataTable = ({data}: TaskDataTableProps ) => {
  const [columns, setColumns] = useState<any>([])
  const [count, setCount] = useState(0)

  const location = useLocation()

  useEffect(() => {
    const tableType = location.pathname === "/team" ? "team" : "personal"
    const cols = [...TABLE_COLUMNS]

    const assignedTo = {
      field: "assignedTo",
      headerName: "Assigned To",
      width: 200,
      editable: false,
    }

    if (tableType === "personal") {
      setColumns([...cols])
    } else {
     
      setColumns([...cols, assignedTo])
    }
  }, [location])


  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataTableWrapper>
        <SearchBox
          hiddenLabel
          InputProps={{
            startAdornment: <SearchIcon></SearchIcon>,
            disableUnderline: true,
          }}
          size="small"
          variant="filled"
          placeholder="Search"
        />
        <div style={{ height: 300, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </DataTableWrapper>

    </div>
  )
}

export default TasksDataTable
