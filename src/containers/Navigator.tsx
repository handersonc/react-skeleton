// React Imports
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

// Custom Imports
import Header from "components/header/Header"

import TakeAssesment from "pages/take-assesment/TakeAssesment"


const Navigation = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<TakeAssesment />}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default Navigation
