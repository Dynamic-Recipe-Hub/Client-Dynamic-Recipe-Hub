import { Import } from "lucide-react";
import React from "react";
import { FaCookie, FaHeart, FaUsers, FaBook, FaEnvelope } from "react-icons/fa";
import Header from "../Components/Header/Header";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="bg-[#f5f3f0] min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#a0785d] text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Sweet Delights</h1>
            <p className="text-xl">
              Crafting Moments of Joy, One Treat at a Time
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#5f4b3a] mb-8 text-center">
              Our Story
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-traditional-indian-mithai-png-image_10212114.png"
                  alt="Our Bakery"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-[#5f4b3a] mb-4">
                  Founded in 2024, Sweet Delights began as a small family bakery
                  with a passion for creating the most delectable treats. Our
                  journey started with a simple goal: to bring smiles to our
                  community through the magic of freshly baked goods.
                </p>
                <p className="text-[#5f4b3a]">
                  Over the years, we've grown from a local favorite to a beloved
                  brand, but our commitment to quality ingredients and
                  handcrafted recipes remains unchanged. Every pastry, cake, and
                  cookie is made with love, just like it was on day one.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="bg-[#a0785d] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <div className="flex flex-wrap justify-center">
              <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                <FaCookie className="text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Quality Ingredients
                </h3>
                <p>
                  We use only the finest, natural ingredients in all our
                  creations.
                </p>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                <FaHeart className="text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Spread Joy</h3>
                <p>
                  Our goal is to make every day a little sweeter for our
                  customers.
                </p>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                <FaUsers className="text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
                <p>
                  We're committed to giving back and supporting local
                  initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#5f4b3a] mb-8 text-center">
              Meet Our Team
            </h2>
            <div className="flex flex-wrap justify-center">
              {[
                {
                  name: "Zeyad",
                  role: "Head Baker",
                  image:
                    "https://media.discordapp.net/attachments/1239307079853019276/1277876324123410452/zeyad.JPG?ex=66d8a5d1&is=66d75451&hm=f2292ad4c4e739bb3632c793b356386f13523398a5f2b81d0d7d3a93315a579a&=&format=webp&width=442&height=662",
                },
                {
                  name: "Noor",
                  role: "Pastry Chef",
                  image:
                    "https://media.discordapp.net/attachments/1239307079853019276/1277876324123410452/zeyad.JPG?ex=66d8a5d1&is=66d75451&hm=f2292ad4c4e739bb3632c793b356386f13523398a5f2b81d0d7d3a93315a579a&=&format=webp&width=442&height=662",
                },
                {
                  name: "Abd",
                  role: "Cake Decorator",
                  image:
                    "https://media.discordapp.net/attachments/1239307079853019276/1277876324123410452/zeyad.JPG?ex=66d8a5d1&is=66d75451&hm=f2292ad4c4e739bb3632c793b356386f13523398a5f2b81d0d7d3a93315a579a&=&format=webp&width=442&height=662",
                },
                // Add more team members here
              ].map((member, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                      style={{
                        border: "4px solid #5f4b3a", // Add a border to enhance the image
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow for better contrast
                      }}
                    />
                    <h3 className="text-xl font-semibold text-[#5f4b3a] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#a0785d]">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Products */}
        <section className="bg-[#f5f3f0] py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#5f4b3a] mb-8 text-center">
              Our Sweet Offerings
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                "Cakes",
                "Cookies",
                "Pastries",
                "Chocolates",
                "Cupcakes",
                "Pies",
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={`/path-to-product-${index + 1}.jpg`}
                    alt={product}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-[#5f4b3a] mb-2">
                      {product}
                    </h3>
                    <p className="text-[#a0785d]">
                      Delicious {product.toLowerCase()} made with love and care.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recipes */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#5f4b3a] mb-8 text-center">
              Explore Our Recipes
            </h2>
            <div className="text-center">
              <FaBook className="text-6xl text-[#a0785d] mx-auto mb-4" />
              <p className="text-lg text-[#5f4b3a] mb-6">
                Discover the joy of baking with our collection of beloved
                recipes. From classic favorites to innovative creations, we're
                sharing the sweetness with you.
              </p>
              <button className="bg-[#a0785d] text-white py-2 px-6 rounded-full hover:bg-[#5f4b3a] transition duration-300">
                View Recipes
              </button>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section className="bg-[#a0785d] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <FaEnvelope className="text-6xl mx-auto mb-4" />
            <p className="text-lg mb-6">
              Have a question or just want to say hi? We'd love to hear from
              you!
            </p>
            <button className="bg-white text-[#a0785d] py-2 px-6 rounded-full hover:bg-[#5f4b3a] hover:text-white transition duration-300">
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
