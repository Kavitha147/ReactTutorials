import React from 'react'
//import { render } from 'react-dom'

class FormDisp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phno: '',
      mail: '',
      update: false
    }
  }
  HandleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  HandleNumber = (event) => {
    this.setState({
      phno: event.target.value
    })
  }
  HandleMAil = (event) => {
    this.setState({
      mail: event.target.value
    })
  }
  HandleUpadte = (event) => {
    event.preventDefault()
    if (this.state.name !== '' && this.state.phno !== '' && this.state.mail !== '')
      this.setState({
        update: true

      })
  }
  render() {
    return (
      <div>
        <form>
          <div>
            <label>Name:</label>
            <input type="text" placeholder="Name" value={this.state.name} onChange={this.HandleName} required />
          </div>
          <div>
            <label>PhoneNo:</label>
            <input type="number" placeholder="Phono" value={this.state.phno} onChange={this.HandleNumber} required />
          </div>
          <div>
            <label>Mail:</label>
            <input type="text" placeholder="Mail" value={this.state.mail} onChange={this.HandleMAil} required />
          </div>

          <button type="submit" onClick={this.HandleUpadte} >Submit</button>


        </form>
        {
          this.state.update && (
            <div>
              <p>Name: {this.state.name}</p>
              <p>PhoneNo:{this.state.phno}</p>
              <p> Mail: {this.state.mail}</p>
            </div>
          )
        }
      </div>

    )
  }
}
export default FormDisp