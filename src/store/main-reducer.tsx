import { IAction } from '../interface/general-interface';

export interface IInitialState {
  name: string;
  lastname: string;
  username: string;
  password: string;
}

const initialState = {
  name: '',
  lastname: '',
  username: '',
  password: '',
} as IInitialState;

const mainReducer = (state = initialState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case 'SIGN_UP_STORING':
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default mainReducer;
