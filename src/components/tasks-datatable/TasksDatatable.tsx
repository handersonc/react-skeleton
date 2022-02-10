// Emotion Imports
import styled from '@emotion/styled'

// MUI Icons Imports
import SearchIcon from '@mui/icons-material/Search'

// MUI Imports
import { alpha, TextField } from '@mui/material'
import { DataGrid, GridRowParams, GridSelectionModel } from '@mui/x-data-grid'
import TaskDetail from 'components/task-detail/TaskDetail'
import { Task } from 'models/Task.interface'
import React, { useState } from 'react'
import { evaluateRowClassName } from 'utils/datatable'

// Custom Imports
import { theme } from '../../theme'
import { TaskDataTableProps } from './Types'

const DataTableContainer = styled.div`
  width: '100%';
  display: 'flex';
`

const StyledDataGrid = styled(DataGrid)({
  '.MuiDataGrid-renderingZone': {
    '& .MuiDataGrid-row': {
      '&:nth-child(2n)': {
        backgroundColor: 'rgba(235, 235, 235, 1)',
      },
    },
  },
})

const SearchBox = styled(TextField)({
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  borderRadius: '3px',
  root: {
    '&::placeholder': {
      textAlign: 'center',
    },
  },
  marginBottom: '7px',
})


const TasksDataTable = ({ data, columns, readOnly = false }: TaskDataTableProps) => {
  const [selectedRows, setSelectedRows] = useState<Array<Task>>([])
  const [count, setCount] = useState(0)
  const [openDetails, setOpenDetails] = useState(false)

  const handleSelectRow = (selectionModel: GridSelectionModel) => {
    setCount(selectionModel.length)
    const selectedRowData = data.filter(row => {
      if (row.id) {
        selectionModel.includes(row.id.toString())
      }
    }) as Array<Task>
    setSelectedRows(selectedRowData)
  }

  const handleDoubleClick = (e: GridRowParams) => {
    setSelectedRows([e.row as Task])
    setOpenDetails(true)
  }

  const handleClose = () => {
    setOpenDetails(false)
  }

  const handleClaim = () => {}

  const handleUnclaim = () => {}

  const handleAction = (type: string) => {}

  const handleMultipleCompleted = () => {}

  const handleRowUpdate = (task: Task) => {}

  const handleSnooze = () => {}


  return (
    <DataTableContainer>
      <TaskDetail
          open={openDetails}
          onClose={handleClose}
          task={selectedRows[0]}
          onClaim={handleClaim}
          onUnclaim={handleUnclaim}
          onAction={(type: string) => handleAction(type)}
          onComplete={handleMultipleCompleted}
          onSave={(row) => handleRowUpdate(row)}
          onSnooze={handleSnooze}
          onAssign={() => handleAction('assign')}
          readOnly={readOnly}
        />
      <div style={{ flexGrow: 1 }}>
        <SearchBox
          hiddenLabel
          InputProps={{
            startAdornment: <SearchIcon></SearchIcon>,
            disableUnderline: true,
          }}
          size='small'
          variant='filled'
          placeholder='Search'
        />

        <StyledDataGrid
          autoHeight={true}
          checkboxSelection={!readOnly}
          columns={columns}
          components={{
            NoRowsOverlay: () => null
          }}
          disableExtendRowFullWidth={false}
          disableSelectionOnClick
          getRowClassName={ row => evaluateRowClassName(row, selectedRows)}
          onRowDoubleClick={handleDoubleClick}
          onSelectionModelChange={handleSelectRow}
          rows={data}
        />
      </div>
    </DataTableContainer>
  )
}

export default TasksDataTable
