import { IAction } from '../../interface/general-interface';

interface IAuthorization {
  access: boolean;
  list_member: any[];
}

export interface IManageState {
  deny_access: IAuthorization;
  allow_access: IAuthorization;
}

const ManageState = {
  allow_access: { access: true, list_member: [] },
  deny_access: { access: false, list_member: [] },
} as IManageState;

const manageReducer = (state = ManageState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case 'ACCESS_MANAGEMENT': {
      const { allow_access, deny_access } = payload;
      return { ...state, allow_access, deny_access };
    }

    default:
      return state;
  }
};

export default manageReducer;
