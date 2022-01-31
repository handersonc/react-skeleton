// React Router Imports
import { Link } from "react-router-dom"

// React Imports
import { SyntheticEvent, useEffect, useState } from "react"

// MUI Imports
import { Tabs } from "@mui/material"
import Tab from "@mui/material/Tab"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"

// MUI Icons Import
import RefreshIcon from "@mui/icons-material/Refresh"

// Emotion Imports
import { styled } from "@mui/system"

// Custom Imports
import { theme } from "../../theme"

const StyledTab = styled(Tab)<{ component: any; to: any }>({
  fontFamily: theme.typography.fontFamily,
  textTransform: "none",
  fontWeight: 700,
  fontsize: "1rem",
  minWidth: 10,
  "&:focus": {
    color: "#000000",
  },
})

const RefreshButton = styled(Button)({
  marginLeft: "auto",
  textTransform: "none",
})

const TaskToolbar = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0)
    } else if (window.location.pathname === "/team" && value !== 1) {
      setValue(1)
    } else if (window.location.pathname === "/jobs" && value !== 2) {
      setValue(2)
    } else if (window.location.pathname === "/management" && value !== 3) {
      setValue(3)
    }
  }, [value])

  const handleChange = (e: SyntheticEvent<Element, Event>, value: any) => {
    setValue(value)
  }

  return (
    <>
      <Toolbar disableGutters>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary">
          <StyledTab component={Link} to="/" label="My Tasks" />
          <StyledTab component={Link} to="/team" label="Team Tasks" />
          {/* <StyledTab component={Link} to="/completed" label="Completed Tasks" /> */}
        </Tabs>
        <RefreshButton color="primary" startIcon={<RefreshIcon />}>
          Refresh Tasks
        </RefreshButton>
      </Toolbar>
    </>
  )
}

export default TaskToolbar
