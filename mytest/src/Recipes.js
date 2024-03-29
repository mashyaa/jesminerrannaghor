import './style.css';
import logo from "./logoo.png"
import achaar from "./olive.jpg"


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Contact from './Contact';
import Home from './App';


const Recipes=()=>{return ( 
<div>
	







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
                <h1>Our Recipes</h1>
                </section>
               
                
                
</div>
            
                
	

	

<section className="recipes">

	<h2>Authentic recipes straight from our villages in Bangladesh. The flavors are rich and unique and there is a dish for everyone</h2>
	
	<div className="row">
		<div className="recipes-col">
		<img src={achaar} alt="achaar" />
			<div className="layer">
				<h3>Roast Pulao</h3>
				</div>
			</div>
		<div className="recipes-col">
		<img src={achaar} alt="achaar" />
			<div className="layer">
			<h3>Shorisha Shak Vhortha</h3>
			</div>
		</div>
		<div className="recipes-col">
		<img src={achaar} alt="achaar" />
			<div className="layer">
			<h3>Fish Bhuna</h3>
			</div>
		</div>
			</div>
	
		<div className="row">
		<div className="recipes-col">
		<img src={achaar} alt="achaar" />
			<div className="layer">
				<h3> Khakri Biran</h3>
				</div>
			</div>
		<div className="recipes-col">
		<img src={achaar} alt="achaar" />
			<div className="layer">
			<h3>Fish Curry</h3>
			</div>
		</div>
		<div className="recipes-col">
		<img src={achaar} alt="achaar" />
			<div className="layer">
			<h3>Desserts</h3>
			</div>
		</div>
			</div>
	

	
	</section>	


<section className= "footer">
	<h4> Find us on Social Media</h4>
	<p> We love sharing our recipes and event updates on our social media! <br/>Never miss out on any of our future events  and join a community that will make you feel like home.</p>
	
	<div className="icons">
		<i className="fa fa-facebook"></i>
		<i className="fa fa-instagram"></i>
		<i className="fa fa-twitter"></i>
		
	</div>
	</section>
	

    </div>
    )
    }
    
	
// // <!--java for menu-->
// <script>
// 	var navlinks = document.getElementById("navlinks");
// 	function showMenu(){
// 		navlinks.style.right = "0";
// 	}
// 	function hideMenu(){
// 		navlinks.style.right = "-200px";
// 	}
// 	</script>	
	
	
// </body>
                

           


function App() {
    return (
        <>

<Router>
                <div>

                    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
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





export default Recipes;