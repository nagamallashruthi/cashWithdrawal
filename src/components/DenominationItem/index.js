// Write your code here
import './index.css'

const DenominationItem = props => {
  const {itemList, subtractValue} = props
  const {value, id} = itemList
  const onClickButton = () => {
    subtractValue(id)
  }

  return (
    <li>
      <div>
        <button className="btn1" type="button" onClick={onClickButton}>
          {value}
        </button>
      </div>
    </li>
  )
}
export default DenominationItem
