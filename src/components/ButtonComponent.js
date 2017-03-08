import React, { Component } from 'react'

class ButtonComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: this.props.type,
      buttonSymbol: '',
      buttonFunction: null,
    }
    this.buttonFunction = this.buttonFunction.bind(this)
  }

  componentWillMount() {
    if(this.props.type == 'plus'){
      this.setState({
        buttonSymbol: '+',
      })
    } else if(this.props.type == 'minus'){
      this.setState({
        buttonSymbol: '-',
      })
    }
  }

  buttonFunction() {
    this.props.buttonFunction()
  }

  render() {
    return(
      <div className="button">
        <button onClick={this.props.onClick}>{this.state.buttonSymbol}</button>
      </div>
    )
  }
}

ButtonComponent.propTypes = {
  type: React.PropTypes.string.isRequired
}

export default ButtonComponent