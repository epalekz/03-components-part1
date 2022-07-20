import {
  CREATE_DATA,
  DELETE_DATA,
  NO_DATA,
  READ_ALL_DATA,
  UPDATE_DATA,
  SET_SORTBY,
  SET_FILTER,
} from "../types";

export const initialState = {
  data: [],
  sortBy: "",
  filter: "",
};

export function movieReducer(state = initialState, action) {
  switch (action.type) {
    case READ_ALL_DATA: {
      return {
        ...state,
        data: action.payload.map((data) => data),
      };
    }
    case CREATE_DATA: {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    case UPDATE_DATA: {
      let newData = state.data.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
      return {
        ...state,
        data: newData,
      };
    }
    case DELETE_DATA: {
      let newData = state.data.filter((el) => el.id !== action.payload);
      return {
        ...state,
        data: newData,
      };
    }
    case SET_SORTBY: {
      return {
        ...state,
        sortBy: action.payload,
      };
    }
    case SET_FILTER: {
      return {
        ...state,
        filter: action.payload,
      };
    }
    case NO_DATA:
      return initialState;
    default:
      return state;
  }
}
