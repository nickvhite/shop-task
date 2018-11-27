const LOAD_DATA = 'LOAD_DATA';
const SHOW_DATA = 'SHOW_DATA';

const initialState = {
    showedEntities: [],
    loadedEntities: [],
    total: 0
};

export default function entities(state = initialState, action) {
    switch( action.type ) {
        case LOAD_DATA: {
            return {
                ...state,
                loadedEntities: action.payload.entities,
                total: action.payload.total
            }
        }
        case SHOW_DATA: {
            return {
                ...state,
                showedEntities: state.showedEntities.concat(state.loadedEntities),
                loadedEntities: []
            }
        }
        default:
            return state;
    }
}

export function loadData(data) {
    return {
        type: LOAD_DATA,
        payload: data
    }
}

export function showData() {
    return {
        type: SHOW_DATA
    }
}