import React from 'react'

class MainInputComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.currentValue !== nextProps.mainValue) {
      this.setState({
        currentValue: nextProps.mainValue
      })
    }
  }

  handleChange(event) {
    this.props.handleChange(event.target.value)
  }

  render() {
    return(
      <div className="mainInput">
        <input type="text" value={this.state.currentValue} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default MainInputComponent