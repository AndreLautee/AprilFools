import React from "react";

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
    alert("A note was submitted: " + this.state.value);
    event.preventDefault();
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
export default Notes;

/*
function Notes() {


  const submitNote = () => {
    console.log();
  }
  return (
    <div id="noteArea">
      <form onSubmit={submitNote}>
        <textarea type="text" id="note" name="note" onChange={event => setTitle(event.target.title)}/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}


export default Notes;
*/
