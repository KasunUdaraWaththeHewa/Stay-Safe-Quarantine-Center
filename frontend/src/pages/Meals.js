import React, { useState, useEffect } from 'react';
import '../css file/Meals.css';
import NavBar from "../components/NavBar";
import MealForm from "../components/Mealform";
import Footer from '../components/Footer';
import axios from 'axios';
import { useAuthContext } from '../hooks/useAuthContext';
import { useHistory } from 'react-router-dom';

function Meal() {
  const [Meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await axios.get('http://localhost:8070/Meal/');
        setMeals(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMeals();
  }, []);

  return (
    <div>
      <div className="navBarContainor">
        <NavBar />
      </div>
      <div className="MealDetailsArea">
        <div className="h2Holder">
          <h2>
            <b>Meal Details Form</b>
          </h2>
        </div>
        <div className="formOneContainorMeal">
          <div className="existingMeal">
          </div>
          <div className="MealForm">
            <MealForm />
          </div>
        </div>
      </div>
      <div className="footerContainorMeal">
        <Footer />
      </div>
    </div>
  );
}export default Meal;