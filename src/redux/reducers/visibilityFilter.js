import { SET_FILTER } from "../actionTypes";
import { VISIBILITY_FILTERS } from "../../constants";

const initialState = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
