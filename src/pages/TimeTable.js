import Week from '../components/Week'
import SubjectsArea from '../components/SubjectsArea'
import TimeTableNavigation from '../components/TimeTableNavigation'

function TimeTable() {
  return (
    <div className = "main">
      <TimeTableNavigation />

      <div className = "main-table">
        <Week />

        <SubjectsArea />
      </div>
    </div>
  )
}

export default TimeTable
