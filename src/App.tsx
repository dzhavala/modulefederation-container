import React from "react";
import './App.css';
import ErrorBoundary from './ErrorBoundary';

const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));

const App = () => (
  <div className="App">
    <h1>CONTAINER</h1>
    <div className="container">
      <div>
        <h3>APP-1</h3>
        <div className="AppFrame">
          <ErrorBoundary>
            <CounterAppOne />
          </ErrorBoundary>
        </div>
      </div>
      <div>
        <h3>APP-2</h3>
        <div className="AppFrame">
          <ErrorBoundary>
            <CounterAppTwo />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  </div>
);

export default App;
