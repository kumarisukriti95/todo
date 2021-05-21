// @flow
import * as React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      task: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.task);
    this.setState({
      list: [...this.state.list, [...this.state.task]],
    });
    document.getElementById("task").value = "";
  };
  removeTask = (elementIndex) => {
    let removedTask = this.state.list.filter((ele, index) => {
      if (index !== elementIndex) {
        return ele;
      }
    });
    this.setState({
      list: removedTask,
    });
  };

  render() {
    console.log(this.state);
    let toDoList = this.state.list.map((data, index) => {
      return (
        <div key={index} style={{ marginTop: "10px" }}>
          <span>{data}</span>
          <button
            style={{ marginLeft: "30px" }}
            onClick={() => this.removeTask(index)}
          >
            Remove
          </button>
        </div>
      );
    });
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="to-do"
            id="task"
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Add</button>
        </div>
        <div>{toDoList.length > 0 ? toDoList : "No Task Found"}</div>
      </div>
    );
  }
}
export default App;
