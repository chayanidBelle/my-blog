interface IAction {
  type: string;
  payload: any;
}

interface IInitialState {
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
      console.log(payload);
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default mainReducer;
