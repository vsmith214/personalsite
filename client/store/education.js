import axios from 'axios';


//ACTION TYPES
const GET_EDUCATION = 'GET_EDUCATION';
const UPDATE_EDUCATION = 'UPDATE_EDUCATION';
const DELETE_EDUCATION = 'DELETE_EDUCATION';
const CREATE_EDUCATION = 'CREATE_EDUCATION';

// ACTION CREATORS
export const getEducation = education => ({ type: GET_EDUCATION, education });
export const updateEducation = education => ({ type: UPDATE_EDUCATION, education });
export const createEduction = education => ({ type: CREATE_EDUCATION, education });
export const deleteEducation = () => ({ type: DELETE_EDUCATION });

//THUNKS
export const loadEducation = () => dispatch =>
  axios.get('/api/education')
    .then(res => dispatch(getEducation(res.data)))
    .catch(err => console.error('Could not retrieve education', err));


//REDUCER
export default function (education = [], action) {
  switch (action.type) {
    case GET_EDUCATION:
      return action.education;
    case UPDATE_EDUCATION:
      return education.map(edu => (edu.id === action.education.id ? action.education.id : edu.id));
    case DELETE_EDUCATION:
      return education.filter(edu => edu.id !== action.education.id);
    case CREATE_EDUCATION:
      return [...education, action.education];
    default: return education;
  }
}
