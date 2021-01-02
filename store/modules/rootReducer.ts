import { combineReducers } from 'redux';

import auth from './auth/reducer';
import category from './admin/category/reducer';

import search from './admin/shared/search/reducer';

export default combineReducers({
    auth,
    category,
    search
});