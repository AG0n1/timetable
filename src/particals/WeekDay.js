function WeekDay({ day }) {
  return (
    <div className="table-week-day">
      <div className="nameOfDay">
        { day.name }

        <div className="js-date">
          { day.date.toLocaleDateString() }
        </div>
      </div>

      {
        day.isWeekend ? (
          <div className="placeToDrop">
            Выходной
          </div>
        ) : ''
      }
    </div>
  )
}

export default WeekDay
