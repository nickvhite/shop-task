import { combineReducers } from 'redux';

import entities from './entities';
import footer from './footer';
import loader from './loader';

export default combineReducers({
    entities,
    footer,
    loader
})