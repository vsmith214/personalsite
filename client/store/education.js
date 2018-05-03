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

//REDUCER
export default function (education = {}, action) {
  switch (action.type) {
    case GET_EDUCATION:
      return action.education;
    default: return education;
  }
}
