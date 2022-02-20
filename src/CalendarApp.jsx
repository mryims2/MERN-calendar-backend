import { Provider } from "react-redux";

import RootRouter from "./router/RootRouter.jsx";
import store from "./store/store.js";

const CalendarApp = () => {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  );
};

export default CalendarApp;
