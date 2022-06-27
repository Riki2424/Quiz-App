import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

const Home = ()=>{
    return (
        <div id="Home">
            <h1 class="title">HOME</h1>
            <div id="start">
             <Link id="go" to="/quiz"> Quiz Start!!</Link>
            </div>
        </div>
);
};

export default Home;