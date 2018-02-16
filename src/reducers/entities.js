const initialState = {
    currentPage: 1,
    shovedEntities: [],
    loadedEntities: [],
    moreButton: true,
    entitiesLength: 0
};

export default function entities(state = initialState, action) {
    if ( action.type === 'LOAD_ENTITIES') {
        state.loadedEntities = action.payload;
        state = Object.assign({}, state);
        return state;
    }
    if ( action.type === 'ADD_ENTITIES') {
        state.shovedEntities = state.shovedEntities.concat(state.loadedEntities);
        state = Object.assign({}, state);
        return state;
    }
    if ( action.type === 'ADD_PAGE') {
        state.currentPage += 1;
        state = Object.assign({}, state);
        return state;
    }
    if ( action.type === 'UPDATE_LENGTH') {
        state.entitiesLength = action.payload;
        state = Object.assign({}, state);
        return state;
    }
    return state;
}