import React, { createElement } from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import rootReducer from "./reducer";
import App from "./containers/App";
import "typeface-roboto";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const target = document.getElementById("root");

if (target) {
    render(
        <CssBaseline>
            <Provider store={store}>
                <App />
            </Provider>
        </CssBaseline>,
        target
    );
}
