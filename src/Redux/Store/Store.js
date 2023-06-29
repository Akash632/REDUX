const store = createStore(
    combineReducers({
    account:accountReducer,
    bonus:bonusReducer
    }),
     applyMiddleware(logger.default,thunk.default));