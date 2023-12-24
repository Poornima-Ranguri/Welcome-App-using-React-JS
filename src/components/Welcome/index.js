import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: true,
  }

  subscribeBtn = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    const text = isSubscribed ? 'Subscribe' : 'Subscribed'
    return (
      <div className="home">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button
          className="btn-element"
          type="button"
          onClick={this.subscribeBtn}
        >
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
