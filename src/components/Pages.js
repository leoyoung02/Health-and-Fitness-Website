import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Recipes from './Recipes';
import Favorites from './Favorites';
import Calories from './Calories';

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} exact></Route>
            <Route path="/Recipes" element={<Recipes />} exact></Route>
            <Route path="/Favorites" element={<Favorites />} exact></Route>
            <Route path="/Calories" element={<Calories />} exact></Route>
        </Routes>
  )
}

export default Pages;