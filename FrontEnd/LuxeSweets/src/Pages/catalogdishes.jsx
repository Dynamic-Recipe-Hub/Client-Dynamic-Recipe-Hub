import React, { useState } from "react";

const desserts = [
  { name: "Decadent Raspberry and Cream Cake", image: "path_to_image1.jpg" },
  { name: "Triple Chocolate Mousse Cake", image: "path_to_image2.jpg" },
  { name: "Cranberry Curd Layered Sponge Cake", image: "path_to_image3.jpg" },
  { name: "Orange and Lemon Curd Tartlets", image: "path_to_image4.jpg" },
  { name: "Creamy Chocolate Nutella Fudge Cake", image: "path_to_image5.jpg" },
  { name: "Homemade Mixed Berries Wedding Cake", image: "path_to_image6.jpg" },
  { name: "Black Forest Birthday Cake", image: "path_to_image7.jpg" },
  { name: "Double Thick Layered Sponge Cake", image: "path_to_image8.jpg" },
  { name: "Lemon Cake with Chocolate Ganache", image: "path_to_image9.jpg" },
  { name: "Cranberry Macaron Ice Cream Cake", image: "path_to_image10.jpg" },
  { name: "No Bake Cheesecake", image: "path_to_image11.jpg" },
  { name: "Almond Cinnamon Sponge Cake", image: "path_to_image12.jpg" },
];

const Catalogdishes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDesserts = desserts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Desserts Recipes</h2>
        <p className="text-gray-600">48 Results</p>
        <select className="mt-2 p-2 border rounded">
          <option>Sort</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentDesserts.map((dessert, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={dessert.image}
              alt={dessert.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{dessert.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        {Array.from(
          { length: Math.ceil(desserts.length / itemsPerPage) },
          (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Catalogdishes;
