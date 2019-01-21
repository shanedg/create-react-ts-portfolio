// tslint:disable:max-classes-per-file

// tslint:disable-next-line:import-name
import React, { Component } from 'react';
import logoSvg from './logo.svg';

import './App.scss';

/**
 * Top-level App component.
 */
class App extends Component {
  public render() {
    return (
      <div className="App">
        <CustomForm></CustomForm>
      </div>
    );
  }
}

/**
 * Define properties of CustomForm state.
 */
interface ICustomInputState {
  formValue: string;
}

class CustomForm extends Component<{}, ICustomInputState> {
  constructor(props: any) {
    super(props);

    this.state = {
      formValue: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CustomInput></CustomInput>
        <input
          type="submit"
          value="Submit"
        />
      </form>
    );
  }

  /**
   * Handle form submission.
   * @param {any} event Form submit event.
   */
  private handleSubmit(event: any) {
    event.preventDefault();
  }
}

class CustomInput extends Component<{}, ICustomInputState> {
  constructor(props: any) {
    super(props);

    this.state = {
      formValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  public render() {
    return (
      <label>
        test:
        <input
          type="text"
          value={this.state.formValue}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  /**
   * Update state based on change to input.
   * @param {any} event Input change event.
   */
  private handleChange(event: any) {
    this.setState({
      formValue: event.target.value,
    });
  }
}

export default App;
