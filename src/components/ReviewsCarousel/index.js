import './index.css'

import {Component} from 'react'

class ReviewCarousel extends Component {
  state = {currentIndex: 0}

  onLeftArrow = () => {
    const {currentIndex} = this.state
    if (currentIndex > 0) {
      this.setState(prevState => ({currentIndex: prevState.currentIndex - 1}))
    }
  }

  onRightArrow = () => {
    const {reviewsList} = this.props
    const {currentIndex} = this.state
    if (currentIndex < reviewsList.length - 1) {
      this.setState(prevState => ({currentIndex: prevState.currentIndex + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props

    const {currentIndex} = this.state

    const {imgUrl, username, companyName, description} = reviewsList[
      currentIndex
    ]
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel">
          <button
            type="button"
            className="arrow-btn"
            data-testid="leftArrow"
            onClick={this.onLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              alt="left arrow"
            />
          </button>
          <div>
            <img src={imgUrl} alt={username} className="dp" />
            <p className="name">{username}</p>
            <p>{companyName}</p>
            <p>{description}</p>
          </div>
          <button
            type="button"
            className="arrow-btn"
            data-testid="rightArrow"
            onClick={this.onRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewCarousel
