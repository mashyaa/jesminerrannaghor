import './style.css';
import logo from "./logoo.png"
import food from "./foodd.png"
// import fish from "./fish.png"
// import dessert from "./des.png"
import bhortha from "./bhortha.png"
import amrin from "./amrin.png"
import man from "./man.png"
import bhorthaplatter from "./bhorthaplatter.jpg"
import olive from "./olive.jpg"

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

// import "./key";
import { Component, useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

import Recipes from './Recipes';
import Contact from './Contact';
import Foodfilter from './Foodfilter';



const Home = () => {
    

    const fetchit = () => {
        fetch("/api/hello")
            .then(res => res.json())
            .then(json => console.log(json));
    }

  useEffect(() => {
    fetchit();
  }, []);

    return (
        <div>
            <section className="header">
                <nav>
                    <a href="index.html"><img src={logo} width="120" height="" alt="logo" /></a>
                    <div className="nav-links" id="navlinks">
                        <i className="fa fa-times"></i>
                        <ul>
                            {/* <li><a href="index.html">Home</a></li> */}
                            <li><Link to= "/"> Home</Link></li>
                            <li><Link to="/Recipes">Recipes</Link></li>
                            <li><Link to="/Foodfilter">Food Filter</Link></li>
                            {/* <li><a href="workshop.html">Workshops</a></li>
                            <li><a href="about.html">About</a></li> */}
                            <li><Link to="/Contact">Workshops</Link></li>
                    

                        </ul>
                    </div>

                    <i className="fa fa-bars"></i>

                </nav>

                <div className="text-box">
                    <h1 >Authentic Bangladeshi Recipes</h1>
                    <p> We are a mother-daughter duo based in NYC with the goal of sharing traditional Bangladeshi recipes with the diaspora and beyond. We love building community and connection through food by creating spaces for people of all cooking backgrounds to join and learn in a welcoming environment.</p>
                    <br />
                    <a href="workshop.html" className="workshoplink">View our Workshops </a>

                </div>

            </section>


            <section className="workshop">
                <h1>Workshops We Offer</h1>
                <p>Our workshops are all beginner-friendly! </p>
                <div className="row">
                    <div className="workshop-col">
                        <h3>Beginners Bhortha</h3>
                        <p>There are so many bhortha combinations- the possibilites are endless. Get creative with us as we experiment with old and new combinations and discover your favorite bhortha! All levels of experience are welcome. </p>
                    </div>
                    <div className="workshop-col">
                        <h3>Chutney Craze</h3>
                        <p>Chutneys are usually spicy- so come prepared for some heat! Levels can be adjusted to your own spice tolerance, but we might have a competition for who's chutney is the spiciest... bring your best game. </p>
                    </div>
                    <div className="workshop-col">
                        <h3>Elish and Eat</h3>
                        <p> Elish is iconic. Paired with our mustard gravy- you will wow anyone who you make it for. You leave with a new superpower and a connection to one of the core Bengali dishes. </p>
                    </div>

                </div>
            </section>

            {/* <!--recipes--> */}

            <section className="recipes">
                <h1>Our Recipes</h1>
                <p>Authentic recipes straight from our villages in Bangladesh. The flavors are rich and unique and there is a dish for everyone.</p>

                <div className="row">
                    <div className="recipes-col">
                        <img src={food} alt="food" />
                        <div className="layer">
                            <h3> Khakri Biran</h3>
                        </div>
                    </div>
                    <div className="recipes-col">
                        <img src={bhorthaplatter} alt="bhortha" />
                        <div className="layer">
                            <h3>Bhorthas</h3>
                        </div>
                    </div>
                    <div className="recipes-col">
                        <img src={olive} alt="olive achaar" />
                        <div className="layer">
                            <h3>Achaar</h3>
                        </div>
                    </div>
                </div>

            </section>

            {/* <!--About--> */}
            <section className="about">
                <h1>About</h1>
                <p>We founded our business in 2020 and built a virtual community through social media. Our TikTok (@jesminerrannaghor) has a community of 5 thousand. We have collaborated with @bengalisofnewyork and @mysticholisticstudio to cater an event. </p>

                <div className="row">
                    <div className="about-col">
                        <img src={amrin} alt="random event photo" />
                        <h3>Bengalis of NY Event</h3>
                    </div>
                    <div className="about-col">
                        <img src={bhortha} alt="food" />
                        <h3>Curated Bhortha Menu </h3>
                    
                    </div>
                    <div className="about-col">
                        <img src={man} alt="food" />
                        <h3>Art and Community</h3>

                    </div>
                </div>


            </section>


            {/* <!--footer--> */}
            <section className="footer">
                <h4> Find us on Social Media</h4>
                <p> We love sharing our recipes and event updates on our social media! <br />Never miss out on any of our future events  and join a community that will make you feel like home.</p>

                <div className="icons">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-twitter"></i>

                </div>
            </section>
        </div>
    )
}

function App() {

    return (


        <>


            <Router>
                <div>
                    <Routes>
                        <Route path="/Recipes" element={<Recipes />}>
                        </Route>

                        <Route path="/" element={<Home />}>
                        </Route>

                        <Route path="/Contact" element={<Contact />}>
                        </Route> 

                        <Route path="/Foodfilter" element= {<Foodfilter />}>
                        </Route>

                    </Routes>
                </div>
            </Router></>
    )
}



export default App;
