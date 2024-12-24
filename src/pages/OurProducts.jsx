import React, { useState, useEffect } from 'react';
import '../styles/OurProducts.css'; // Import the CSS file for styling

const products = [
  { id: 1, name: 'paracetamol', image: './paracetamol(1).jpg' },
  { id: 2, name: 'Antihistamines', image: './Antihistamines(2).jpeg' },
  { id: 3, name: 'Antihistamine creams', image: './Antihistamine-creams(3).jpeg' },
  { id: 4, name: 'Antacids', image: './Antacids(4).png' },
  { id: 5, name: 'Antiseptic creams', image: './Antiseptic creams(5).jpg' },
  { id: 6, name: 'Oral rehydration salts (ORS)', image: './Oral_rehydration_salts(6).jpeg' },
  { id: 7, name: 'Lubricating eye drops', image: './Lubricating_eye_drops(7).jpg' },
  { id: 8, name: 'Cough syrups', image: './Cough-syrup(8).jpeg' },
  { id: 9, name: 'Band-aids', image: './Band-aids(9).jpg' },
  { id: 10, name: 'Glucometers', image: './Glucometers(10).jpg' },
  { id: 11, name: 'Antibacterial wipes', image: './Antibacterial-wipes(11).jpg' },
  { id: 12, name: 'Painrelief spray', image: './Painrelief-spray(12).jpg' },
  { id: 13, name: 'Vaporizers', image: './Vaporizers(13).jpg' },
  { id: 14, name: 'Multivitamins', image: 'Multivitamins(14).jpg' },
  { id: 15, name: 'Baby diapers', image: './Diapers(15).jpg' },
  { id: 16, name: 'Hand sanitizers', image: './Hand-sanitizers(16).jpg' },
  { id: 17, name: 'Sanitary pads', image: 'Sanitary-pads(17).jpg' },
  { id: 18, name: 'Protein supplements', image: './Protein(18).jpg' },
  { id: 19, name: 'Nicotine gums', image: './Nicotine-gums(19).jpg' },
  { id: 20, name: 'Mosquito repellents', image: './Mosquito-repellents(20).jpg' },
  { id: 21, name: 'Anti-dandruff shampoos', image: './Anti-dandruff(21).jpg' },
  { id: 22, name: 'Sensitivity tooth paste', image: './Toothpaste(22).jpg' },
  { id: 23, name: 'Aspirin', image: './Aspirin(23).jpg' },
  { id: 24, name: 'Support bands', image: './support bands(24).jpg' },
  { id: 25, name: 'Face masks', image: './Face-masks(25).jpg' },
];

const OurProducts = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  const sendToWhatsApp = () => {
    const productList = cart.map((product) => product.name).join(', ');
    const whatsappUrl = `https://wa.me/+919003174634?text=${encodeURIComponent(`Product List: ${productList}`)}`;
    window.open(whatsappUrl, '_blank');
    setCart([]); // Clear the cart after sending the message
  };

  return (
    <div>
      <div className="top-right">
        {/* <button className="add-list-button">Add List</button> */}
      </div>
      <h2>Shree Velan Medicals</h2>
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <button className="add-to-cart-button" onClick={() => addToCart(product)}>
              <i className="fas fa-cart-plus"></i> Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="cart-display">
        <h3>Selected Products</h3>
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.name}
              <button className="remove-from-cart-button" onClick={() => removeFromCart(product)}>
                <i className="fas fa-minus"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button className="buy-button" onClick={sendToWhatsApp}>Buy</button>
    </div>
  );
};

export default OurProducts;