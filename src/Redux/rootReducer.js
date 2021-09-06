import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./User/userReducer";
import cartReducer from "./Cart/cartReducer";
import directoryReduser from "./Directory/directoryReduser";
import shopReducer from "./Shop/shopReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReduser,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)