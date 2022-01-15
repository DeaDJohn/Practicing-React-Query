import './App.css';
import React from "react";
import ReactDOM from "react-dom";

import {
	QueryClient,
	QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";


import Navigation from "./Routes/Navigation";
const queryClient = new QueryClient();


function App() {

	return (
		<div className="container" >
				<QueryClientProvider client={queryClient}>
					<Navigation />
					<ReactQueryDevtools initialIsOpen />
				</QueryClientProvider>
		</div>
	);
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
