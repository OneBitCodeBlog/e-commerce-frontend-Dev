import { combineReducers } from 'redux';

import auth from './auth/reducer';
import category from './admin/category/reducer';
import product from './admin/product/reducer';
import systemRequirement from './admin/systemRequirement/reducer';
import coupon from './admin/coupon/reducer';

import search from './admin/shared/search/reducer';

export default combineReducers({
    auth,
    category,
    product,
    systemRequirement,
    coupon,
    search
});