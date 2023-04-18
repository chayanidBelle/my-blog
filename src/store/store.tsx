import { createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage'; //defaults to localstorage for web
import mainReducer from './main-reducer';

//specifies the storage mechanism
const persistConfig = {
  key: 'root',
  storage,
};

//mainReducer: regular reducer
const rootReducer = mainReducer;
const persistedReducer = persistReducer(persistConfig, rootReducer);

//store
export const store = createStore(persistedReducer);
//persist reducer
export const persistor = persistStore(store);
