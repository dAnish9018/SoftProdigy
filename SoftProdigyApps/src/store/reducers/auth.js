
import { DID_TRY_AL} from '../actions/auth';


const initialState = {
  
  didTryLogin: false,
 
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case DID_TRY_AL:
      return {
        ...state,
        didTryLogin: true,
      };
    
    default:
      return state;
  }
};
//---------------------------------------
