import React from "react";
import './App.css';

const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));

const App = () => (
	<div className="App">
		<h1>CONTAINER</h1>
		<div className="container">
			<React.Suspense fallback={'loading...'}>
				<div>
					<h3>APP-1</h3>
					<CounterAppOne />
				</div>
			</React.Suspense>
			<React.Suspense fallback={'loading...'}>
				<div>
					<h3>APP-2</h3>
					<CounterAppTwo />
				</div>
			</React.Suspense>
		</div>
	</div>
);

export default App;
