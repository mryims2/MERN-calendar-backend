import uiTypes from "../types/uiTypes.js";

const initialState = {
  visivilityModal: false,
  loading: false,
  checking: false,
};

const uiReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case uiTypes.openModal:
      return {
        ...state,
        visivilityModal: true,
      };
    case uiTypes.closeModal:
      return {
        ...state,
        visivilityModal: false,
      };
    case uiTypes.startLoading:
      return {
        ...state,
        loading: true,
      };
    case uiTypes.finishLoading:
      return {
        ...state,
        loading: false,
      };
    case uiTypes.startChecking:
      return {
        ...state,
        checking: true,
      };
    case uiTypes.finishChecking:
      return {
        ...state,
        checking: false,
      };

    default:
      return state;
  }
};

export default uiReducer;
