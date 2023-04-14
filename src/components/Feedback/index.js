// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {box: true}

  getOnClick = () => {
    this.setState(prevState => ({box: !prevState.box}))

    console.log(this.box)
  }

  render() {
    const {resources} = this.props
    const {emojis} = resources
    const {loveEmojiUrl} = resources
    const {box} = this.state
    console.log(emojis)
    return (
      <div className="bg-main">
        {box ? (
          <div className="tile">
            <h2>How satisfied are you with our customer support performance</h2>
            <div className="tile-sub">
              <li className="emj-tile">
                <img
                  key={emojis[0].id}
                  src={emojis[0].imageUrl}
                  alt={emojis[0].name}
                  className="emj"
                  onClick={this.getOnClick}
                />
                <p>{emojis[0].name}</p>
              </li>

              <li className="emj-tile">
                <img
                  key={emojis[1].id}
                  src={emojis[1].imageUrl}
                  alt={emojis[1].name}
                  className="emj"
                  onClick={this.getOnClick}
                />
                <p>{emojis[1].name}</p>
              </li>
              <li className="emj-tile">
                <img
                  key={emojis[2].id}
                  src={emojis[2].imageUrl}
                  alt={emojis[2].name}
                  className="emj"
                  onClick={this.getOnClick}
                />
                <p>{emojis[2].name}</p>
              </li>
            </div>
          </div>
        ) : (
          <li className="tile">
            <img src={loveEmojiUrl} alt="love emoji" />
            <h1>Thank You</h1>
          </li>
        )}
      </div>
    )
  }
}

export default Feedback
