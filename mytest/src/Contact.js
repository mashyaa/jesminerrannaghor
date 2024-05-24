
// src/Contact.js
import './style.css';
import logo from "./logoo.png"
import achaar from "./olive.jpg"


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Recipes from './Recipes';
import Home from './App';

import React, { useState } from 'react';
import { db, collection, addDoc } from './firebaseConfig';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contacts'), formData);
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message: ', error);
    }
  };

  return (
    <>
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
                            <li><Link to="/Foodfilter">Food Filter</Link></li>
                            {/* <li><a href="workshop.html">Workshops</a></li>
                            <li><a href="about.html">About</a></li> */}
                            <li><Link to="/Contact">Workshops</Link></li>
                    

                        </ul>
                    </div>

                    <i className="fa fa-bars"></i>

                </nav>
          <h1>Sign Up For A Workshop!</h1>
        </section>
      </div>

      
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
            

      <section className="location">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d193527.09160237372!2d-74.04909445904526!3d40.72108060350679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d40.6968883!2d-73.7830858!4m5!1s0x89c259a7550271dd%3A0xec88233d3a5d270f!2sBaruch%20College%2C%2055%20Lexington%20Ave%2C%20New%20York%2C%20NY%2010010!3m2!1d40.7404315!2d-73.98322519999999!5e0!3m2!1sen!2sus!4v1702303545452!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section className="contact-us">
        <div className="contact-col">
          <h5>One Bernard Baruch Way</h5>
          <p>(55 Lexington Ave At 24th St), New York, NY 10010</p>
        </div>

        <div className="contact-col">
          <h5>+1 3333444555</h5>
          <p>Monday - Saturday 12pm-8pm</p>
        </div>

        <div className="contact-col">
          <h5>jesminerrannaghor@gmail.com</h5>
          <p>Feel free to email us!</p>
        </div>
        <div className="contact-col">
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
            <input type="email" name="email" placeholder="xxx@email.com" required onChange={handleChange} />
            <input type="text" name="question" placeholder="Workshop Name" required onChange={handleChange} />
            <textarea name="message" rows="8" placeholder="Message" required onChange={handleChange}></textarea>
            <button type="submit" className="workshoplink altwork">Submit</button>
          </form>
        </div>
      </section>

      <section className="footer">
        <h4>Find us on Social Media</h4>
        <p>
          We love sharing our recipes and event updates on our social media! <br />
          Never miss out on any of our future events and join a community that will make you feel like home.
        </p>
        <div className="icons">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-twitter"></i>
        </div>
      </section>
    </>
  );
};

export default Contact;
