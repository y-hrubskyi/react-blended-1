import React, { Component } from 'react';
import { GiButtonFinger } from 'react-icons/gi';

export class Points extends Component {
  state = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
  };

  onLeawePoint(option, value) {
    this.setState(prevState => ({
      [option]: prevState[option] + value,
    }));
  }
  render() {
    return (
      <>
        <ul>
          {Object.keys(this.state).map((option, idx) => (
            <li key={option}>
              <button
                type="button"
                onClick={() => this.onLeawePoint(option, idx + 1)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
