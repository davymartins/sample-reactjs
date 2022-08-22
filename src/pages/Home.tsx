import React from 'react';
import { NavBar } from '../components/NavBar';
 
export const Home = () => {
    return (
        <div>
            <NavBar/>
            <br/>
            <h1>Home</h1>     
            <br/>
            <a href='http://localhost:3000/portfolio'>portfolio</a>    
        </div>
    );   
};