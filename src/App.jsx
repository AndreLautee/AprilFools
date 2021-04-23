// import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table } from "react-bootstrap";
import React from "react";

export default function App() {
  let data = [
    {
      course: "Art 5th",
      grade: "75",
      zeros: 0,
      missing_assignments: 0,
      last_access: "03/03/2021",
      latest_submission: null,
      note: null
    },
    {
      course: "COUNSELOR EL",
      grade: "None",
      zeros: 0,
      missing_assignments: 0,
      last_access: "03/03/2021",
      latest_submission: null,
      note: null
    },
    {
      course: "ELA",
      grade: "26.67",
      zeros: "4(show)",
      missing_assignments: "3(show)",
      last_access: "03/11/2021",
      latest_submission: "03/08/2021",
      note: null
    },
    {
      course: "Homeroom 5th",
      grade: "99",
      zeros: 0,
      missing_assignments: 0,
      last_access: "03/03/2021",
      latest_submission: null,
      note: null
    }
  ];

  return (
    <div className="App">
      <Container>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Course</th>
              <th>Grade</th>
              <th>Zeros</th>
              <th>Missing Assignments</th>
              <th>Last Access</th>
              <th>Latest Submission</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => {
              return (
                <tr key={data.course}>
                  <td>{data.course}</td>
                  <td>{data.grade}</td>
                  <td>{data.zeros}</td>
                  <td>${data.missing_assignments}</td>
                  <td>${data.last_access}</td>
                  <td>{data.latest_submission}</td>
                  <td>{data.note}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Notes></Notes>
      </Container>
    </div>
  );
}

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();

    alert("A note was submitted: " + this.state.value);
  }

  render() {
    return (
      <div id="noteArea">
        <form onSubmit={this.handleSubmit}>
          <textarea
            type="text"
            id="note"
            name="note"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
