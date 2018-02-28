const updateView = 'app/view/UPDATE_SCREEN_SIZE';
  
// action creator
export const updateScreenSize = (size) => {
    return {
      type: updateView,
      screenSize: size
    }
}

// initial state
const initialState = {
    screenSize: typeof window === 'object'? window.innerWidth: null

}

//reducer
export const view = (state = initialState, action) => {
    switch(action.type) {
      case updateView:
          return {
                ...state,
                screenSize: action.screenSize,
                showBlock: showBlock(action.screenSize),
                showFlex: showFlex(action.screenSize)
          }
      default:
          return state;
    }
}



// -----------------------------------------------------------//




// css state based on screen width
const maxSize = 812;

const showFlex = (size) => {
    return size < maxSize? 'none' : 'flex';
}

const showBlock = (size) => {
    return size < maxSize? 'none': 'block';
}

// toggle display
const toggleFlex = (size, display) => {
    if (size < maxSize) {
        return display == 'none'? 'flex' : 'none';
    }
    return 'flex';
}

const toggleBlock = (size, display) => {
    if (size < maxSize) {
        return display == 'none'? 'block' : 'none';
    }
    return 'block';
}






export default view;
