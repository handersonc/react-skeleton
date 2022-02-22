

// React Imports
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

// MUI Imports
import Divider from "@mui/material/Divider"


// Custom Imports
import Header from "components/header/Header"

import TakeAssesment from "pages/take-assesment/TakeAssesment"


const Navigation = () => {
  return (
    <Router>
      <Header />
      <Divider />
      <Divider />
      <Routes>
        <Route path="/">
          <Route index element={<TakeAssesment />}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default Navigation
