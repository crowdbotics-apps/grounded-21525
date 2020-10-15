import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn44143158Reducer from '../features/SignIn44143158/redux/reducers'
import EmailAuth11143151Reducer from '../features/EmailAuth11143151/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn44143158: SignIn44143158Reducer,
EmailAuth11143151: EmailAuth11143151Reducer,

});