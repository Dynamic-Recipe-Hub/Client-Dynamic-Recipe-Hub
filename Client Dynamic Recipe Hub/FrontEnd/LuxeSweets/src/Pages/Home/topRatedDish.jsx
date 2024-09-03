import React from 'react';
import { Star } from 'lucide-react';

const DishCard = ({ title, description, image, rating }) => (
  <div className="relative bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-xl">
    <img src={image} alt={title} className="w-full h-64  object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 flex flex-col justify-end">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-200 text-sm">{description}</p>
    </div>
    <div className="absolute top-4 right-4 flex space-x-1">
      <StarRating rating={rating} />
    </div>
  </div>
);

const StarRating = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))}
  </div>
);

const TopRatedDish = () => {
  const mainDish = {
    title: "Grilled Salmon Deluxe",
    description: "Fresh Atlantic salmon with a lemon herb crust",
    image: "https://cdn.pixabay.com/photo/2014/03/07/11/00/bananas-282313_1280.jpg",
    rating: 5
  };

  
  const sides = [
    { title: "Beef Tenderloin", description: "Pan-seared with rosemary", image: "https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2013/6/25/0/CC_kelsey-nixon-smores-bars-recipe-2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1372183746016.jpeg", rating: 4 },
    { title: "Vegetable Lasagna", description: "Layered with ricotta and spinach", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz9soPnOwiJc0Ylaa1Mkhu_GinaeeH7hbveLZyfQafXRJKZtCQv6TDVwJ_C3tkW0o-_Lo&usqp=CAU", rating: 3 },
    { title: "Chicken Marsala", description: "Tender chicken in wine sauce", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDNvbixfm9keqmHTaYMOMrcyrK1Zbp6vTELZYjDYU9t4FUfS2-vx73Z-WGQZ0nzmO9Bio&usqp=CAU", rating: 4 },
    { title: "Shrimp Scampi", description: "Garlic butter shrimp over pasta", image: "https://static01.nyt.com/images/2022/08/08/dining/SMORESREX-smores/merlin_210763791_566f449f-66b1-40ec-a407-ac2bdb3b4307-mediumThreeByTwo440.jpg", rating: 5 },
    { title: "Eggplant Parmesan", description: "Crispy eggplant with marinara", image: "https://www.chewoutloud.com/wp-content/uploads/2024/06/smores-vertical-780x1170.jpg", rating: 3 },
    { title: "Stuffed Portobello", description: "Filled with quinoa and veggies", image: "https://abeautifulmess.com/wp-content/uploads/2022/07/oven-baked-smores.jpg", rating: 4 }
  ];

  return (
    <div className="container mx-auto px-4 py-20 bg-[#e2ceb1] bg-opacity-10">
      <div className="max-w-6xl mx-auto">
        {/* Section for the top-rated dish */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#b0956e]">Our Top Rated Dish</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="md:col-span-2 ">
              <DishCard {...mainDish}/>
            </div>
          </div>
        </div>

        {/* Section for other top-rated dishes */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#b0956e] text-center">Top Rated Dishes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sides.map((side, index) => (
              <DishCard key={index} {...side} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedDish;
