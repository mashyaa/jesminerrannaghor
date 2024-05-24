import React, { useState } from 'react';
import './style.css';
import logo from "./logoo.png";
import Data from './Data';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import Buttons from './Buttons';
import { BrowserRouter as Router, Link } from "react-router-dom";

const Foodfilter = () => {
    const [item, setItems] = useState(Data);
    const menuItems = [...new Set(Data.map((val) => val.category))];
    const filterItems = (cat) => {
        const newItems = Data.filter((newval) => newval.category === cat);
        setItems(newItems);
    };

    return (
        
            <div>
                <section className="sub-header">
                <nav>
                    <a href="index.html"><img src={logo} width="120" height="" alt="logo" /></a>
                    <div className="nav-links" id="navlinks">
                        <i className="fa fa-times"></i>
                        <ul>
                            {/* <li><a href="index.html">Home</a></li> */}
                            <li><Link to= "/"> Home</Link></li>
                            <li><Link to="/Recipes">Recipes</Link></li>
                            <li><Link to="/Foodfilter">Recipe Filter</Link></li>
                            {/* <li><a href="workshop.html">Workshops</a></li>
                            <li><a href="about.html">About</a></li> */}
                            <li><Link to="/Contact">Workshops</Link></li>
                    

                        </ul>
                    </div>

                    <i className="fa fa-bars"></i>

                </nav>
                    <h1>Filter Recipes</h1>
                </section>

                <div className="container-fluid">
                    <div className="row">
                        <h1 className="text-center col-12 fw-bold mt-3 mb-5"></h1>
                        <Buttons
                            menuItems={menuItems}
                            filterItems={filterItems}
                            setItems={setItems}
                        />
                        <Card item={item} />
                    </div>
                </div>
            </div>
    
    );
};

export default Foodfilter;
