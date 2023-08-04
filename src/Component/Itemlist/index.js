import './index.css'

const Itemlist = prop => {
  const {list, onClickCheck} = prop
  const {thumbnailUrl, id} = list
  const clickMatch = () => {
    onClickCheck(id)
  }
  return (
    <li>
      <button type="button" className="item-btn">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumb"
          onClick={clickMatch}
        />
      </button>
    </li>
  )
}

export default Itemlist
