import { Routes, Route } from "react-router-dom"

import TimeTable from './TimeTable'
import Home from './Home'

function Pages() {
  return (
	  <Routes>
      { /* <Route path="/" element={<Home />} /> */ }
      <Route path="/" element={<TimeTable />} />
    </Routes>
  )
}

export default Pages
