import React from "react";
import './App.css';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      word: "",
    };
  }
  handleValues() {
    this.state.array.push(this.state.word);
    this.setState({ array:this.state.array });
    this.setState({ word: "" });
  }
  handleWord = (e) => {
    this.setState({
      word: e.target.value,
    });
  };

  handleDelete = (index) => {
    this.state.array.splice(index, 1);
    this.setState({ array: this.state.array });
  }

  render() {
    return (
      <div>
        <center>
          <h1>ToDo List</h1>
          <input type="text" onChange={this.handleWord} /><br></br>
          <br></br><button onClick={() => this.handleValues()} type="submit">
            Add
        </button><br></br>
          {this.state.array && this.state.array.map((item, index) => <div><p className="item">{item}</p>
            <button onClick={() => this.handleDelete(index)} type="submit">
              DELETE
      </button></div>)}
        </center>

      </div>
    );
  }
}
export default ToDo;
