import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import smoothscroll from 'smoothscroll-polyfill';

import {
  schemeChanger,
  quiz,
  userInfo,
  mainViewModal,
  workViewModal,
  userToken,
  pageCache,
  userQuestions,
  notificationsAllow,
  tooltip,
  shopQuestion,
  scrollTo,
} from './ReduxReducers';

const rootReducer = combineReducers({
  schemeChanger,
  quiz,
  userInfo,
  mainViewModal,
  workViewModal,
  userToken,
  pageCache,
  userQuestions,
  notificationsAllow,
  tooltip,
  shopQuestion,
  scrollTo,
});

const store = createStore(rootReducer, {});

// Init VK  Mini App
bridge.send("VKWebAppInit");

// kick off the polyfill!
smoothscroll.polyfill();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}