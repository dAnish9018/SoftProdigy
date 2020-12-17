export const CAROUSEL_IMAGES = 'CAROUSELIMAGES';
export const CATEGORY_IMAGES = 'CATEGORYIMAGES'

export const fetchCarouselImages = () => {
    return async (dispatch, getState) => {
        try {
          const response = await fetch(
            'http://shibe.online/api/shibes?count=5&urls=true&httpsUrls=true',
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            },
          );
    
          if (!response.ok) {
            throw new Error('Response not OK');
          }
    
          const resData = await response.json();
          //console.log(resData);

          dispatch({
                  type: CAROUSEL_IMAGES,
                  content: resData,
                });
          
    
        } catch (err) {
          throw err;
        }
      };
}

export const fetchCategoriesList = () => {
    return async (dispatch, getState) => {
        try {
          const response = await fetch(
            'http://shibe.online/api/shibes?count=20&urls=true&httpsUrls=true',
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            },
          );
    
          if (!response.ok) {
            throw new Error('Response not OK');
          }
    
          const resData = await response.json();
          console.log(resData);

          dispatch({
                  type: CATEGORY_IMAGES,
                  content: resData,
                });
          
    
        } catch (err) {
          throw err;
        }
      };
}