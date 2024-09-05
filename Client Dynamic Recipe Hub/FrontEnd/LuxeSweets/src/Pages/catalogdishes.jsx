import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CatalogDishes = () => {
  const [desserts, setDesserts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:1001/api/records");
      const data = response.data;

      // Get chefId from sessionStorage
      const chefId = sessionStorage.getItem("selectedChefId");

      // Filter dishes based on chef's id
      const filteredDesserts = data.filter(
        (dessert) => dessert.chef === chefId
      );

      setDesserts(filteredDesserts);
    } catch (e) {
      console.log(e);
    }
  };

  // Click handler to store the clicked dessert in sessionStorage
  const handleCardClick = (dessert) => {
    sessionStorage.setItem("selectedDessert", JSON.stringify(dessert));
    navigate(`/DishDetail`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Desserts Dishes</h2>
        <p className="text-gray-600">{desserts.length}</p>
        <select className="mt-2 p-2 border rounded">
          {desserts.map((dessert, index) => (
            <option key={index}>{dessert.name}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {desserts.map((dessert, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => handleCardClick(dessert)}
          >
            <img
              src={dessert.images[0]} // Display the first image in the array
              alt={dessert.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{dessert.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center"></div>
    </div>
  );
};

export default CatalogDishes;
