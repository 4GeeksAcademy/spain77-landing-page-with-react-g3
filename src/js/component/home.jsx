import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { NavBar } from "./Navbar";
import { Jumbotron } from "./Jumbotron.jsx";
import { Footer } from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<NavBar/>
			<Jumbotron />
			<Footer/>
		</div>
	);
};

export default Home;
