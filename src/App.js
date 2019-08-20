import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useRoutes } from "hookrouter";
import CategorySelect from "./components/CategorySelect";
import Trivia from "./components/Trivia";
import Header from "./components/Header";
import "./css/main.css";

const routes = {
  "/": () => <CategorySelect />,
  "/trivia/:id": ({ id }) => <Trivia id={id} />
};
function App() {
  const routeResult = useRoutes(routes);
  return (
    <Provider store={store}>
      <Header />
      {routeResult}
    </Provider>
  );
}

export default App;
