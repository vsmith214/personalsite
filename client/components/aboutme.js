import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {

  render() {
    return (
      <div>
        <h3>Background</h3>
        <button type="submit">Edit</button>
        <text />
        <h3>Education</h3>
        <ul />
        <button type="submit">Add</button>
        <h3>Projects</h3>
      </div>
    )
  }
}

const mapState = state => {

}

export default connect(mapState, null)(About);
