import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage'; //defaults to localstorage for web
// import mainReducer from './main-reducer';
import rootReducer from './root.reducer';

//specifies the storage mechanism
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['mainReducer'], //only state in mainReducer will be persisted
  //blacklist: [] //Exclude certained key from being persisted
};

//mainReducer: regular reducer
//rootReducer is multiple combined reducer
// const rootReducer = mainReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

//store
export const store = createStore(persistedReducer, applyMiddleware(logger));
//persist reducer
export const persistor = persistStore(store);
