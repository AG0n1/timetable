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
    { id: 10, name: 'КФ-51' }
  ]

  const groupTitles = [
    'ПМ',
    'КФ'
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

      <button
        onClick={toogleSettings}>
        Параметры
      </button>

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
