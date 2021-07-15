// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevCount => ({
      count: prevCount.count + Math.floor(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="outer-container">
        <div className="container">
          <h1 className="heading">
            Count <span className="span">{count}</span>
          </h1>
          {count % 2 === 0 ? (
            <p className="para">Count is Even</p>
          ) : (
            <p className="para">Count is Odd</p>
          )}
          <div>
            <button className="button" type="button" onClick={this.onIncrement}>
              Increment
            </button>
          </div>
          <p className="description">
            *increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
