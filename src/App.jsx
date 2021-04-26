// import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table } from "react-bootstrap";
import React, { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([
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
  ]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("A note was submitted: " + value);
    //data[0].note = value;
    const newData = [
      {
        course: "Art 5th",
        grade: "75",
        zeros: 0,
        missing_assignments: 0,
        last_access: "03/03/2021",
        latest_submission: null,
        note: value
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
    setData(newData);
  };

  return (
    <div className="App">
      <Container>
        <Tables data={data} />
        <Notes handleSubmit={handleSubmit} handleChange={handleChange} />
      </Container>
    </div>
  );
}
function Tables(props) {
  return (
    <div>
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
          {props.data.map((data) => {
            return (
              console.log(data.note),
              (
                <Row
                  key={data.course}
                  course={data.course}
                  grade={data.grade}
                  zeros={data.zeros}
                  missing_assignments={data.missing_assignments}
                  last_access={data.last_access}
                  latest_submission={data.latest_submission}
                  note={data.note}
                />
              )
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
function Row(props) {
  return (
    <tr key={props.course}>
      <td>{props.course}</td>
      <td>{props.grade}</td>
      <td>{props.zeros}</td>
      <td>${props.missing_assignments}</td>
      <td>${props.last_access}</td>
      <td>{props.latest_submission}</td>
      <td>{props.note}</td>
    </tr>
  );
}

function Notes(props) {
  return (
    <div id="noteArea">
      <form onSubmit={props.handleSubmit}>
        <textarea
          type="text"
          id="note"
          name="note"
          onChange={props.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
/*
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
*/
