import React from 'react';
import axios from 'axios'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      text: "",
      updated: "this will update if database works"
    };
    this.getText = this.getText.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getText()
  }

  getText() {
    axios.get('/text')
      .then(text => {
        this.setState({
          updated: JSON.stringify(text.data)
        })
      })


  }

  handleChange(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = {
      id: this.state.id,
      text: this.state.text
    };

    console.log(data);
    fetch('/test', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    });

    this.getText()
  }

  render() {
    return (
      <div>
        <p>React is working!</p>
        <p>{this.state.updated}</p>
        <form onSubmit={this.handleSubmit}>
          <label> ID
            <input name="id" value={this.state.id} onChange={this.handleChange}/>
          </label>
          <label> Text
            <input name="text" value={this.state.text} onChange={this.handleChange}/>
          </label>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
