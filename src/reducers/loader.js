const initialState = {
    visible: true
};

export default function loader(state = initialState, action) {
    if ( action.type === 'SHOW_LOADER') {
        state.visible = action.payload;
        state = Object.assign({}, state);
        return state;
    }
    return state;
}