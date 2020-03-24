import React from "react";
import "./App.css";
import data from "./data";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      selected: false
    };
  }
  sortData(event) {
    const value = event.target.value;
    this.setState(
      {
        persons: data
      },
      this.sorting(value)
    );
  }
  sorting(value) {
    const persons = this.state.persons;
    if (value === "name") {
      persons.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === "age") {
      persons.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    this.setState({
      persons
    });
  }
  render() {
    return (
      <div>
        <div className={"container"}>
          <h1 className={"text-center"}>birthday Recodrds</h1>
          <form
            className={"form-inline forms"}
            onChange={this.sortData.bind(this)}
          >
            <div class="form-group">
              <label>
                <input type="radio" value="name" name="sorting" /> Sort by name
              </label>
            </div>
            <div class="form-group">
              <label>
                <input type="radio" value="age" name="sorting" /> Sort by age
              </label>
            </div>
          </form>
          <table className={"table table-striped"}>
            <tbody>
              <tr>
                <th>person name</th>
                <th>date of birth</th>
              </tr>
              {this.state.persons.length !== 0 ? (
                this.state.persons.map(person => (
                  <tr key={person.index}>
                    <td>{person.name}</td>
                    <td>{person.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <p className="text-center text-info">
                    Kindly select radio buttons to load the data
                  </p>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default App;
