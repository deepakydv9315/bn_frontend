import React, { useState } from 'react';
import './ProductDetail.scss';
import image1 from "../../Assets/Images/main.png";
import { BsArrowDown } from "react-icons/bs";
import m1 from "../../Assets/Images/main1.png";
import m2 from "../../Assets/Images/main2.png";
import chart from "../../Assets/Images/chart.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
    // State to manage selected color, size, and quantity

    const [selectedSize, setSelectedSize] = useState('');
    const [selectedFlavour, setSelectedFlavour] = useState('');
    const [quantity, setQuantity] = useState(1);

    // Dummy product data (replace with actual data)
    const product = {
        name: 'MASS GAINER',
        description: 'Burly Nutrition Super Gainer XL Weight Gainer, 1 kg, Chocolate',
        mrp: 1000,
        discountedPrice: 800,
        flavour: ['Unflavoured', 'Chocolate', 'Orange', 'Banana', 'Lemon', 'Fruitpunch', 'Vanilla', 'Mango', 'Peanut'],
        sizes: ['100 g', '200 g', '500 g', '1 kg'],
        images: [image1, m1, m2,image1, m1, m2],
        chart: [chart],
        manufacturingDetails: 'Lorem ipsum manufacturing details...',
        productDescription: 'The Tropicana jumpsuit is a cherished classic. The tailored jumpsuit shape in this beautiful print is perfect for a casual night out. The lightweight crepe creates a fluid and feminine silhouette when accentuated with the accompanying belt.',
    };


    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const handleFlavourChange = (flavour) => {
        setSelectedFlavour(flavour);
    };

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const toggleAccordion1 = () => {
        setIsOpen(!isOpen);
    };

    const toggleAccordion2 = () => {
        setIsOpen(!isOpen);
    };

    const toggleAccordion3 = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="product-details-container contain">
                <div className="left-section">
                    <div className="main-product-image">
                        <img src={product.images[0]} alt="Main Product" />
                        <div className="additional-images">
                            {product.images.map((image, index) => (
                                <div key={index} className="additional-image">
                                    <img src={image} alt={`Additional Image ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        <img src={product.chart} alt="Main Product" className='chart'/>
                    </div>
                </div>
                <div className="right-section">
                    <div className="product-info">
                        <div className='name'>{product.name}</div>
                        <p className='head'>{product.description}</p>
                        <div className="price">
                            <span className="mrp"> ₹{product.mrp} </span>
                            <span className="discounted-price">₹{product.discountedPrice}(15%OFF)</span>
                        </div>

                        <div className="size-options" style={{ display: "flex", flexWrap: "wrap", gap: "10px 10px" }}>
                            <div className='flavour'>Flavour</div>
                            {product.flavour.map((flavour, index) => (
                                <button
                                    key={index}
                                    className={`size-button ${flavour === selectedFlavour ? 'selected' : ''}`}
                                    onClick={() => handleFlavourChange(flavour)}
                                >
                                    {flavour}
                                </button>
                            ))}
                        </div>
                        <div className="size-options" style={{ display: "flex", flexWrap: "wrap", gap: "10px 10px" }}>
                            <div className='flavour'>Weight</div>
                            {product.sizes.map((size, index) => (
                                <button
                                    key={index}
                                    className={`size-button ${size === selectedSize ? 'selected' : ''}`}
                                    onClick={() => handleSizeChange(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        <div className="quantity">
                            <div className='quant'>
                                <button onClick={() => handleQuantityChange(Math.max(1, quantity - 1))}>-</button>
                                <span>{quantity}</span>
                                <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            {/* <FontAwesomeIcon icon={faHeart} className="wishlist-icon" /> */}
                            <button className="wishlist-button">Add to Cart</button><br></br>
                            <button className="cart-button">Buy Now</button>
                        </div>

                    </div>
                    <div className="product-description-reviews">
                        <h3>Description</h3>
                        <p>{product.productDescription}</p>

                    </div>
                    <div className={`manufacturing-details ${isOpen ? 'open' : ''}`}>
                        <div className='arrow'>
                            <h3 onClick={toggleAccordion}>Manufacturing Details</h3>
                            <BsArrowDown onClick={toggleAccordion} style={{ fontSize: "20px", marginTop: "5px" }} /></div>
                        <p>{product.manufacturingDetails}</p>
                    </div>
                    <div className={`manufacturing-details ${isOpen ? 'open' : ''}`}>
                        <div className='arrow'>
                            <h3 onClick={toggleAccordion1}>Manufacturing Details</h3>
                            <BsArrowDown onClick={toggleAccordion1} style={{ fontSize: "20px", marginTop: "5px" }} /></div>
                        <p>{product.manufacturingDetails}</p>
                    </div>
                    <div className={`manufacturing-details ${isOpen ? 'open' : ''}`}>
                        <div className='arrow'>
                            <h3 onClick={toggleAccordion2}>Manufacturing Details</h3>
                            <BsArrowDown onClick={toggleAccordion2} style={{ fontSize: "20px", marginTop: "5px" }} /></div>
                        <p>{product.manufacturingDetails}</p>
                    </div>
                    <div className={`manufacturing-details ${isOpen ? 'open' : ''}`}>
                        <div className='arrow'>
                            <h3 onClick={toggleAccordion3}>Manufacturing Details</h3>
                            <BsArrowDown onClick={toggleAccordion3} style={{ fontSize: "20px", marginTop: "5px" }} /></div>
                        <p>{product.manufacturingDetails}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
