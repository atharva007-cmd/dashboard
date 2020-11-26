import "./App.css";
import Dashboard from "./components/dashboard";
import DataDescription from "./components/dataDescription";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<DataDescription />
				<Dashboard />
			</header>
		</div>
	);
}

export default App;
