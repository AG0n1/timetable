import WeekDay from '../particals/WeekDay'

function Week() {
  const week = [
    {
      name: 'Понедельник',
      date: new Date(),
      isWeekend: false
    },
    {
      name: 'Вторник',
      date: new Date(),
      isWeekend: false
    },
    {
      name: 'Среда',
      date: new Date(),
      isWeekend: false
    },
    {
      name: 'Четверг',
      date: new Date(),
      isWeekend: false
    },
    {
      name: 'Пятница',
      date: new Date(),
      isWeekend: false
    },
    {
      name: 'Суббота',
      date: new Date(),
      isWeekend: false
    },
    {
      name: 'Воскресенье',
      date: new Date(),
      isWeekend: true
    },
  ]
  
  return (
    <div className = "table-week">
      {
        week.map((day, index) => {
          return <WeekDay key={index} day={day} />
        })
      }
    </div>
  )
}

export default Week
