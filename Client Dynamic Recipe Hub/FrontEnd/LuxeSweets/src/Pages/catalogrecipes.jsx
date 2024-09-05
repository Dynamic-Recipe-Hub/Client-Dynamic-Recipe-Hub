import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Catalogrecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await axios.get("http://localhost:1001/api/recipe");
      const data = response.data;
      console.log(data);
      setRecipes(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCardClick = (recipe) => {
    sessionStorage.setItem("selectedRecipe", JSON.stringify(recipe));
    navigate(`/Recipesdetail`);
  };

  return (
    <div className="bg-[#F4EAD2] min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Display filters and sorting options */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold mb-4 text-[#B0956E]">Delightful Dessert Recipes</h2>
          <p className="text-xl text-[#B0956E] mb-6">{recipes.length} Sweet Creations Await You</p>
          <select className="mt-2 p-3 border-2 border-[#B0956E] rounded-xl text-[#B0956E] bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#B0956E] focus:border-transparent">
            {recipes.map((recipe, index) => (
              <option key={index}>{recipe.categories[0]}</option>
            ))}
          </select>
        </div>

        {/* Display recipes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
              onClick={() => handleCardClick(recipe)}
            >
              <img
                src={recipe.images[0]}
                alt={recipe.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#B0956E] mb-2">{recipe.title}</h3>
                <p className="text-gray-600 text-sm">Click to view details</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          {/* You can add pagination or "Load More" button here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Catalogrecipes;