import './index.css'

const TabList = prop => {
  const {tabs, arrangeThumbnails, click} = prop
  const {displayText, tabId} = tabs
  const changeTheList = () => {
    arrangeThumbnails(tabId)
  }
  const cls = click === tabId

  return (
    <li>
      <button
        type="button"
        onClick={changeTheList}
        className={cls ? 'btn-checked' : 'btn'}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabList
