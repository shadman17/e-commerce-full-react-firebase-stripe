import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// 'development' || 'production'

const middleWares = [
    process.env.NODE_ENV !== "production" && logger,
    thunk,
].filter(Boolean);

const composedEnhancer =
    (process.env.NODE_ENV !== "development" &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
    persistedReducer,
    undefined,
    composedEnhancers
);

export const persistor = persistStore(store);
