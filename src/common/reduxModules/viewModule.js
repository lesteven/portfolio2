const updateView = 'app/screenSize/UPDATE_SCREEN_SIZE';

// action creator
export const update = (size) => {
    console.log(size);
    return {
        type: updateView,
        screenSize: size
    }
}

// initial state
const initialState = {
    screenSize: typeof window === 'object'? window.innerWidth: null

}
//
export const view = (state = initialState, action) => {
    switch(action.type) {
        case updateView:
            return {
                ...state,
                screenSize: action.screenSize
            }
        default:
            return state;
    }
}

export default view;
