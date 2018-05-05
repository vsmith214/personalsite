import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadEducation } from '../store/index';

class Home extends Component {

  componentDidMount() {
    this.props.loadEducation();
  }
  render() {
    const { education } = this.props;
    return (
      <div>
        <h3>Background</h3>
        <button type="submit">Edit</button>
        <text />
        <h3>Education</h3>
        {education[0] &&
          <ul>
            {education.map(edu => <li key={edu.id}>{edu}</li>)}
          </ul>
        }
        <button type="submit">Add</button>
        <h3>Projects</h3>
      </div>
    )
  }
}

const mapState = state => ({
  education: state.education
});

const mapDispatch = dispatch => ({
  loadEducation: () => dispatch(loadEducation())
});

export default connect(mapState, mapDispatch)(Home);
