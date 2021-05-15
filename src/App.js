// import './App.css';
import React, { Component } from 'react';

class CharComponent extends Component {
  render() {
    const style = {
      display: 'inline-block',
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid black',
    };

    return (
      <div style={style} onClick={this.props.click}>
        <p>{this.props.letter}</p>
      </div>
    );
  }
}
class ValidationComponent extends Component {
  render() {
    return (
      <div>
        <input onChange={this.props.change} value={this.props.input} />
        <p>{this.props.text}</p>
      </div>
    );
  }
}

class App extends Component {
  state = {
    length: 0,
    content: ['a'],
  };

  inputChangeHandler = event => {
    const contentArray = event.target.value.split('');

    this.setState({
      length: event.target.value.length,
      content: contentArray,
    });
  };

  charRemoveHandler = letterIndex => {
    const letters = [...this.state.content];
    letters.splice(letterIndex, 1);
    this.setState({ length: letters.length, content: letters });
  };

  render() {
    const output =
      this.state.length < 5 ? 'text too short' : 'text long enough';

    const input = this.state.content.join('');
    console.log('input ->', input);

    let letterCharOutput = [];
    const letters = [...this.state.content];
    if (letters.length !== 0) {
      console.log('letters -> ', letters);

      letterCharOutput = letters.map((letter, index) => {
        return (
          <CharComponent
            letter={letter}
            key={index}
            click={() => this.charRemoveHandler(index)}
          />
        );
      });
    }

    return (
      <div>
        <ValidationComponent
          change={this.inputChangeHandler}
          textOutput={output}
          textInput={input}
        />
        <p>{this.state.length}</p>
        {letterCharOutput}
      </div>
    );
  }
}

export default App;
