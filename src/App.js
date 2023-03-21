import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import Login from "./components/Login";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Products from "./components/Products";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/Checkout"
import Thanks from "./components/Thanks";

export const config = {
  endpoint: `http://${ipConfig.workspaceIp}:8082/api/v1`,
};

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/">
              <Products />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route exact path="/thanks">
              <Thanks />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
