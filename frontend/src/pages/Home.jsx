import React from 'react';
import './Home.css'; 

const HomePage = () => {
  return (
    <div className= "container" >
      <header>
        <h1><center> SkinEnchant</center></h1>
      </header>

      <main>
        <section>
         
          <p>Welcome to SkinEnchant, your ultimate destination for all things skincare! We are an online e-commerce platform dedicated to bringing you the finest selection of high-quality skincare products to help you achieve healthy, radiant, and glowing skin.</p>
        </section>

        <section>
          <h3>Featured Products</h3>
          <div className="product-list">
            <div className="product-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaksOwIZSVKWPPAfcc9e-84uDQg8olx7wk5g&usqp=CAU" alt="" />
              <h4>Best Milky Cleanser</h4>
              <p>Thayers Milky Hydrating Face Cleanser with Snow Mushroom and Hyaluronic Acid</p>
              <a href="/products/1">View Details</a>
            </div>
            
            <div className="product-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQenG86qPqhBZZslovEvnAVNo-tjgdx2c8wFh0l1ND1LGKnSWiiRuc4ZKl24NrDe0ZzKl8&usqp=CAU" alt="Product 2" />
              <h4>Best Cleansing Emulsion</h4>
              <p>U Beauty Mantle Skin Conditioning Wash</p>
              <a href="/products/2">View Details</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Skincare Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
