
import {CAROUSEL_IMAGES, CATEGORY_IMAGES} from '../actions/home'

const initialState = {
  carouselImages: [],
  categoryImages:[],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CAROUSEL_IMAGES:
      return {
        ...state,
        carouselImages:action.content
       //do something...
      };
      case CATEGORY_IMAGES:
      return {
        ...state,
        categoryImages:action.content
       //do something...
      };

    default:
      return state;
  }
};
