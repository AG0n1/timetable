import { useState } from 'react'

function GroupList() {
  const [isSettingsActive, setIsSettingsActive] = useState(false)
  const [activeGroupFilter, setActiveGroupFilter] = useState('ПМ')

  const groups = [
    { id: 1, name: 'ПМ-11' },
    { id: 2, name: 'ПМ-21' },
    { id: 3, name: 'ПМ-31' },
    { id: 4, name: 'ПМ-41' },
    { id: 5, name: 'ПМ-51' },
      
    { id: 6, name: 'КФ-11' },
    { id: 7, name: 'КФ-21' },
    { id: 8, name: 'КФ-31' },
    { id: 9, name: 'КФ-41' },
    { id: 10, name: 'КФ-51' },
      
    { id: 11, name: 'МИ-11' },
    { id: 12, name: 'МИ-21' },
    { id: 13, name: 'МИ-31' },
    { id: 14, name: 'МИ-41' },
    { id: 15, name: 'МИ-51' },
      
    { id: 16, name: 'ФИ-11' },
    { id: 17, name: 'ФИ-21' },
    { id: 18, name: 'ФИ-31' },
    { id: 19, name: 'ФИ-41' },
    { id: 20, name: 'ФИ-51' },
      
    { id: 21, name: 'ЭК-11' },
    { id: 22, name: 'ЭК-21' },
    { id: 23, name: 'ЭК-31' },
    { id: 24, name: 'ЭК-41' },
    { id: 25, name: 'ЭК-51' }
  ]

  const groupTitles = [
    'ПМ',
    'КФ',
    'МИ',
    'ФИ',
    'ЭК'
  ]

  function toogleSettings() {
    setIsSettingsActive(!isSettingsActive)
  }

  return (
    <div className = "pair1" id="js-pair">
      <select name="select" className="list">
        {
          groups
            .filter(group => group.name.includes(activeGroupFilter))
            .map((group, index) => {
              return <option key={index} value={group.id}>{ group.name }</option>
            })
        }
      </select>
      <svg onClick={toogleSettings} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"/></svg>

      {
        isSettingsActive ? (
          <ul>
            {
              groupTitles.map((title, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => setActiveGroupFilter(title)}>{ title }</li>
                )
              })
            }
          </ul>
        ) : ''
      }

    </div>
  )
}

export default GroupList
