// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {count: 2000}

  subtractValue = id => {
    let amount
    switch (id) {
      case 1:
        amount = 50
        break
      case 2:
        amount = 100
        break
      case 3:
        amount = 200
        break
      case 4:
        amount = 500
        break
      default:
        break
    }
    this.setState(prevState => ({count: prevState.count - amount}))
  }

  render() {
    const {denominationsList} = this.props
    const {count} = this.state

    return (
      <div className="container">
        <div className="bg">
          <div className="top">
            <button className="btn" type="button">
              S
            </button>
            <h1 className="head">Sarah Williams</h1>
          </div>
          <div className="top1">
            <p className="bal">Your Balance</p>
            <div>
              <p className="head">{count}</p>
              <p className="bal">In Rupees</p>
            </div>
          </div>
          <p className="head">Withdraw</p>
          <p className="bal">CHOOSE SUM (IN RUPEES)</p>
          <ul className="ul">
            {denominationsList.map(each => (
              <DenominationItem
                itemList={each}
                key={each.id}
                subtractValue={this.subtractValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
