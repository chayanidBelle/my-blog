import { combineReducers } from 'redux';
import mainReducer, { IInitialState } from './main-reducer';
import manageReducer, { IManageState } from './mange-menu/manage-reducer';

export interface IReducers {
  mainReducer: IInitialState;
  manageReducer: IManageState;
}

export default combineReducers({
  mainReducer,
  manageReducer,
});
