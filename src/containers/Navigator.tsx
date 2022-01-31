

// React Imports
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom"

// MUI Imports
import Divider from "@mui/material/Divider"


// Custom Imports
import Header from "components/header/Header"
import TaskToolbar from "components/task-toolbar/TaskToolbar"

import MyTasks from "pages/my-tasks/MyTasks"


const Navigation = () => {
  return (
    <Router>
      <Header />
      <Divider />
      <TaskToolbar />
      <Divider />
      <Routes>
        <Route path="/">
          <Route index element={<MyTasks />}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default Navigation
