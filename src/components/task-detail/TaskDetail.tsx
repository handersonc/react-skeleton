import React, { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  Grid,
  DialogContentText,
  Divider,
  FormLabel,
  Select,
  FormControl,
  MenuItem,
  TextField,
  SelectChangeEvent,
  Button,
  DialogActions,
} from "@mui/material"
import Item from "@mui/material/Grid"

import { Task } from "models/Task.interface"
import { StyledDialogContentText, StyledDialogTitle } from "./StyledComponents"
import { TaskDetailProps } from "./Types"

const TaskDetail = ({ open, task, readOnly, title, onClose, onClaim, onUnclaim, onSnooze, onSave, onComplete }: TaskDetailProps) => {
  const [updatedRow, setUpdatedRow] = useState<Task>(task)
  const [claimedTask, setClaimedTask] = useState(false)
  const [retainNextTaskChecked, setRetainNextTaskChecked] = useState(null)
  const [manualGatewayChecked, setManualGatewayChecked] = useState(null)
  const [completeDisabled, setCompleteDisabled] = useState(true)

  const claimedTaskSection = title === 'Claimed Tasks'

  useEffect(() => {
    setUpdatedRow(task)
    if (task) {
      if (!task.assignedTo || task?.assignedTo === "") setClaimedTask(true)

      if (!task.isYesPath && !task.retainNextTask) setCompleteDisabled(false)
    }
  }, [task])

  useEffect(() => {
    if (task?.isYesPath && task?.retainNextTask) {
      if (manualGatewayChecked !== null && retainNextTaskChecked !== null) {
        setCompleteDisabled(false)
        return
      }
    } else if (task?.isYesPath) {
      if (manualGatewayChecked !== null) setCompleteDisabled(() => false)
    } else if (task?.retainNextTask) {
      if (retainNextTaskChecked !== null) setCompleteDisabled(() => false)
    }
  }, [manualGatewayChecked, retainNextTaskChecked])

  const onChangeAssignedTo = (event: SelectChangeEvent<string>) => {
    var newRow: {[k: string]: any} = {...updatedRow};
    newRow[event?.target.name] = event?.target.value
    setUpdatedRow(newRow as Task)
  }

  const onUpdateDueDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRow = { ...updatedRow }
    newRow.dueDate = event?.target.value
  }

  const handleClose = () => {
    onClose()
  }

  const handleSave = () => {
    onSave(updatedRow)
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="md">
        <StyledDialogTitle>
          {updatedRow?.jobNumber} - {updatedRow?.taskName}
        </StyledDialogTitle>
        <DialogContent dividers={true}>
          <Grid
            container
            spacing={2}
            style={{
              marginBottom: "20px",
            }}
          >
            <Grid item xs={6}>
              <Item>
                <DialogContentText>Case Name: </DialogContentText>
                <StyledDialogContentText>
                  {updatedRow?.caseName}
                </StyledDialogContentText>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <DialogContentText>Division: </DialogContentText>
                <StyledDialogContentText>
                  {updatedRow?.division}
                </StyledDialogContentText>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <DialogContentText>Task Status: </DialogContentText>
                <StyledDialogContentText>
                  {updatedRow?.status}
                </StyledDialogContentText>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <DialogContentText>Video Due Date: </DialogContentText>
                <StyledDialogContentText>
                  {updatedRow?.earliestVideoOrderDueDate}
                </StyledDialogContentText>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <DialogContentText>Video Turnaround Days:</DialogContentText>
                <StyledDialogContentText>
                  {updatedRow?.earliestVideoOrderDays}
                </StyledDialogContentText>
              </Item>
            </Grid>
            <Divider />
            {claimedTask ? (
              <>
                <Grid item xs={6}>
                  <Item>
                    <DialogContentText>Assigned To: </DialogContentText>
                    <StyledDialogContentText>
                      {updatedRow?.assignedTo}
                    </StyledDialogContentText>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <DialogContentText>Priority: </DialogContentText>
                    <StyledDialogContentText>
                      {updatedRow?.priority}
                    </StyledDialogContentText>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <DialogContentText>Task Due Date: </DialogContentText>
                    <StyledDialogContentText>
                      {updatedRow?.dueDate}
                    </StyledDialogContentText>
                  </Item>
                </Grid>
              </>
            ) : !readOnly ? (
              <>
                <Grid item xs={6}>
                  <Item>
                    <FormLabel>Assigned To: </FormLabel>
                    <FormControl margin="dense" fullWidth>
                      <Select
                        variant="outlined"
                        required
                        id="assigned-control"
                        name="assignedTo"
                        value={updatedRow?.assignedTo}
                        onChange={onChangeAssignedTo}
                        margin="dense"
                      >
                        <MenuItem value="gjames">Garrett James</MenuItem>
                        <MenuItem value="cgalinda">Carmen Galinda</MenuItem>
                        <MenuItem value="mdrenkalo">Matt Drenkalo</MenuItem>
                      </Select>
                    </FormControl>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <FormLabel>Priority: </FormLabel>
                    <FormControl margin="dense" fullWidth>
                      <Select
                        variant="outlined"
                        required
                        id="priority-control"
                        name="priority"
                        value={updatedRow?.priority}
                        onChange={onChangeAssignedTo}
                        margin="dense"
                      >
                        <MenuItem value="Urgent">Urgent</MenuItem>
                        <MenuItem value="Normal">Normal</MenuItem>
                        <MenuItem value="High">High</MenuItem>
                      </Select>
                    </FormControl>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <FormLabel>Task Due Date: </FormLabel>
                    <FormControl margin="dense" fullWidth>
                      <TextField
                        id="standard-read-only-input"
                        name="taskDueDate"
                        onChange={onUpdateDueDate}
                        defaultValue={updatedRow?.dueDate}
                        variant="outlined"
                      />
                    </FormControl>
                  </Item>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={6}>
                  <Item>
                    <DialogContentText>Assigned To: </DialogContentText>
                    <StyledDialogContentText>
                      {updatedRow?.assignedTo}
                    </StyledDialogContentText>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <DialogContentText>Priority: </DialogContentText>
                    <StyledDialogContentText>
                      {updatedRow?.priority}
                    </StyledDialogContentText>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <DialogContentText>Task Due Date: </DialogContentText>
                    <StyledDialogContentText>
                      {updatedRow?.dueDate}
                    </StyledDialogContentText>
                  </Item>
                </Grid>
              </>
            )}
          </Grid>
          <Divider />
        </DialogContent>
        <DialogActions>
            {!readOnly && (
              <>
                {!updatedRow?.assignedTo && !claimedTaskSection && (
                  <Button
                    size='medium'
                    color='primary'
                    variant='outlined'
                    onClick={onClaim}
                  >
                    Claim
                  </Button>
                )}
                {updatedRow?.assignedTo && !claimedTaskSection && (
                  <Button
                    size='medium'
                    color='primary'
                    variant='outlined'
                    onClick={onUnclaim}
                  >
                    Unclaim
                  </Button>
                )}

                {updatedRow?.assignedTo !== '' && (
                  <Button
                    size='medium'
                    color='primary'
                    variant='outlined'
                    onClick={onSnooze}
                  >
                    {updatedRow?.status?.includes('Snoozed')
                      ? 'Unsnooze'
                      : 'Snooze'}
                  </Button>
                )}
                {!claimedTaskSection && (
                  <Button
                    size='medium'
                    color='primary'
                    variant='contained'
                    onClick={() => {
                      onComplete()
                      onClose()
                    }}
                    disabled={claimedTask || completeDisabled}
                  >
                    Complete
                  </Button>
                )}
                <Button
                  size='medium'
                  color='primary'
                  variant='contained'
                  disabled={claimedTask}
                  onClick={handleSave}
                >
                  Save Task
                </Button>
              </>
            )}
            <Button
              size='medium'
              color='primary'
              variant='text'
              onClick={handleClose}
            >
              Close
            </Button>
          </DialogActions>
      </Dialog>
    </>
  )
}

export default TaskDetail
