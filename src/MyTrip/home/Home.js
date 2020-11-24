import React from 'react';
import './Home.css'

function Home(){
    return(
        <div>
            <h2>Welcome to MyTrip</h2><p></p>
        <div className="container">
            <img className="p1" src="manali.jpg"/>
            <img className="p1" src="dan.jpg"/>
            <img className="p1" src="ladakh.jpg"/>
            <div className="p2">Place: Manali<br/>Rating: *****</div>
            <div className="p2">Place: Dandeli<br/>Rating: *****</div>
            <div className="p2">Place: Ladakh<br/>Rating: *****</div>
        </div>
        <div className="container">
            <img className="p1" src="kerala.jpg"/>
            <img className="p1" src="ne.jpg"/>
            <img className="p1" src="goa.png"/>
            <div className="p2">Place: Kerala<br/>Rating: *****</div>
            <div className="p2">Place: North-East India<br/>Rating: *****</div>
            <div className="p2">Place: Goa<br/>Rating: *****</div>
        </div>
        </div>
    )
}

export default Home;