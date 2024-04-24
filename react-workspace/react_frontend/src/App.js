import React from 'react';
	import ListEmployeeComponent from './components/ListEmployeeComponent'
	import HeaderComponent from './components/HeaderComponent';
	import FooterComponent from './components/FooterComponent';
	import './App.css';
	import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
	import CreateEmployeeComponent from './components/CreateEmployeeComponent';
	import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
	function App() {
  	return (
		<div>

	    <HeaderComponent/>
		<Router>

  			<div className="container">
			<Routes>
				<Route exact path="/" element={<ListEmployeeComponent/>}></Route>
				<Route path="/employees" element={<ListEmployeeComponent/>}></Route>
				<Route path="/add-employee" element={<CreateEmployeeComponent/>}></Route>
				<Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>}></Route>
			</Routes>	
			</div>
		</Router>
    	<FooterComponent/>

 	   </div>
	);
	}
	export default App;
