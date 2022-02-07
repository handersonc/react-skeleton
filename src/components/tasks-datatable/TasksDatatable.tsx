// Emotion Imports
import styled from "@emotion/styled"

// MUI Icons Imports
import SearchIcon from "@mui/icons-material/Search"

// MUI Imports
import { alpha, TextField } from "@mui/material"
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

// Custom Imports
import { theme } from "../../theme"
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

const TasksDataTable = ({data, columns}: TaskDataTableProps ) => {

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
          <DataGrid rows={data} columns={columns} />
        </div>
      </DataTableWrapper>
    </div>
  )
}

export default TasksDataTable
