import React, { Component } from 'react';
import { GiButtonFinger } from 'react-icons/gi';
import { PointButton, PointsList } from './Points.styled';

export class Points extends Component {
  state = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
  };

  onLeavePoint(option, value) {
    this.setState(prevState => ({
      [option]: prevState[option] + value,
    }));
  }

  render() {
    const { state } = this;
    const pointsList = Object.keys(state).map((option, idx) => (
      <li key={option}>
        <PointButton
          type="button"
          onClick={() => this.onLeavePoint(option, idx + 1)}
        >
          {option}
        </PointButton>
        <span> {state[option]}</span>
      </li>
    ));

    return <PointsList>{pointsList}</PointsList>;
  }
}
