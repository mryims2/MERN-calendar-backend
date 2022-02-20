import uiTypes from "../types/uiTypes.js";

export const openModal = () => ({
  type: uiTypes.openModal,
});
export const closeModal = () => ({
  type: uiTypes.closeModal,
});
export const startLoading = () => ({ type: uiTypes.startLoading });
export const finishLoading = () => ({ type: uiTypes.finishLoading });

export const startChecking = () => ({ type: uiTypes.startChecking });
export const finishChecking = () => ({ type: uiTypes.finishChecking });
