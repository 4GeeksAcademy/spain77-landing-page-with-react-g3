import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { NavBar } from "./Navbar";
import { Jumbotron } from "./Jumbotron.jsx";
import { Footer } from "./Footer";
import { Cards } from "./Cards.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<NavBar/>
			<Jumbotron />
			<div className="container">
				<div className="row">
					<div className="col-3">
				<Cards/>
					</div>
					<div className="col-3">
				<Cards imageURL="https://randomuser.me/api/portraits/men/26.jpg"/>
					</div>
					<div className="col-3">
				<Cards imageURL="https://randomuser.me/api/portraits/men/65.jpg"/>
					</div>
					<div className="col-3">
				<Cards imageURL="https://randomuser.me/api/portraits/men/83.jpg"/>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
