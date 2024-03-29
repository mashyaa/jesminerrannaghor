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


const Contact = () => {
    return (
       

        <>
         
            <div>
                <section className="sub-header">

                    <nav>
                        <a href="index.html"><img src={logo} width="120" height="" alt="logo" /></a>
                        <div className="nav-links" id="navlinks">
                            <i className="fa fa-times"></i>
                            <ul>
                            <li><Link to= "/"> Home</Link></li>
                            <li><Link to="/Recipes">Recipes</Link></li>
                            <li><a href="workshop.html">Workshops</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><Link to="/Contact">Contact</Link></li>

                            </ul>
                        </div>

                        <i className="fa fa-bars"></i>

                    </nav>
                    <h1>Contact Us</h1>
                </section>


            </div>
            
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
            >
            </iframe>
        </section>

            <section className="contact-us">
                <div className="contact-col">
                    <h5>One Bernard Baruch Way </h5>
                    <p>(55 Lexington Ave At 24th St), New York, NY 10010</p>
                </div>

                <div className="contact-col">
                    <h5>+1 3333444555 </h5>
                    <p>Monday -Saturday 12pm-8pm</p>
                </div>

                <div className="contact-col">
                    <h5>jesminerrannaghor@gmail.com</h5>
                    <p>Feel free to email us!</p>
                </div>
                <div className="contact-col">
                    <form action="thankyou.html" onsubmit="return validateForm()">
                        <input type="text" placeholder="Name" required></input>
                        <input type="email" placeholder="xxx@email.com" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required></input>
                        <input type="text" placeholder="Question" required></input>
                        <textarea rows="8" placeholder="Message" required></textarea>
                        <button type="submit" className="workshoplink altwork">Submit</button>
                    </form>
                </div>
            </section>



            <section className="footer">
                <h4> Find us on Social Media</h4>
                <p> We love sharing our recipes and event updates on our social media! <br />Never miss out on any of our future events  and join a community that will make you feel like home.</p>

                <div className="icons">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-twitter"></i>

                </div>
            </section>
        </>





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
                    </Routes>
                </div>
            </Router></>
    )
}




export default Contact;

