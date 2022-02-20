import authTypes from "../types/authTypes";

const initialState = {
  logged: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case authTypes.signIn:
      return {
        ...state,
        ...payload,
        logged: true,
      };
    case authTypes.signOut:
      return {
        logged: false,
      };
    default:
      return state;
  }
};

export default authReducer;
