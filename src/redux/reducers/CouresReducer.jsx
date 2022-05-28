import { FETCH_COURSES, FETCH_COURSE_DETAIL } from "../types/ElearningType";

const stateDefault = {
  coures: [],
  coursesDetail: null,
};

export const CouresReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case FETCH_COURSES: {
      state.coures = action.payLoad;
      return { ...state };
    }
    case FETCH_COURSE_DETAIL:{
      state.coursesDetail = action.payLoad;
      return{...state}
    }
    default:
      return state;
  }
};
