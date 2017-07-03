import {combineReducers} from 'redux';
import { reducer as form } from 'redux-form';


import routes from './routes';
const allReducers= combineReducers({
  form, 
  routes
});
export default allReducers;
