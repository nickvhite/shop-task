const initialState = {
    currentPage: 1,
    shovedEntities: [
        {
            "title":"test title 1",
            "description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
            "cost":249,
            "discountCost":199,
            "new":true,
            "img":"\/img\/img_product.png"
        },
        {
            "title":"test title 2",
            "description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
            "cost":249,
            "discountCost":null,
            "new":false,
            "img":"\/img\/img_product.png"
        },
        {
            "title":"test title 3",
            "description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
            "cost":125,
            "new":true,
            "discountCost":null,
            "img":"\/img\/img_product.png"
        },
        {
            "title":"test title 4",
            "description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
            "cost":111,
            "discountCost":90,
            "new":false,
            "img":"\/img\/img_product.png"
        }
    ],
    loadedEntities: [],
    moreButton: true,
    entitiesLength: 9
};

export default function entities(state = initialState, action) {
    if ( action.type === 'SHOW_ENTITIES') {
        state.shovedEntities = action.payload;
        state = Object.assign([], state);
        return state;
    }
    if ( action.type === 'LOAD_ENTITIES') {
        state.loadedEntities = action.payload;
        state = Object.assign([], state);
        return state;
    }
    if ( action.type === 'ADD_ENTITIES') {
        state.shovedEntities = state.shovedEntities.concat(state.loadedEntities);
        state = Object.assign([], state);
        return state;
    }
    return state;
}

let result = {
    "entities": [
        {
            "title":"test title 1",
            "description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
            "cost":249,
            "discountCost":199,
            "new":true,
            "img":"\/img\/img_product.png"
        },
        {
            "title":"test title 2",
            "description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
            "cost":249,
            "discountCost":null,
            "new":false,
            "img":"\/img\/img_product.png"
        },
        {
            "title":"test title 3",
            "description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
            "cost":125,
            "new":true,
            "discountCost":null,
            "img":"\/img\/img_product.png"
        },
        {
            "title":"test title 4",
            "description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
            "cost":111,
            "discountCost":90,
            "new":false,
            "img":"\/img\/img_product.png"
        }
    ],
    "total":9
};