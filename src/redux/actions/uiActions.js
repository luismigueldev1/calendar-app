import { types } from "../types/types";

export const openModalAction = () => {
  return {
    type: types.uiOpenModal,
  };
};

export const closeModalAction = () => {
  return {
    type: types.uiCloseModal,
  };
};
