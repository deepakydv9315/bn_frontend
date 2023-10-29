import React, { useState } from 'react';
import './ShippingAddress.scss';

const ShippingAddress = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="shipping-address">
      <h2>Shipping Address</h2>
      <form>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="addressLine1">Address Line 1</label>
          <input
            type="text"
            id="addressLine1"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleInputChange}
          />
          <label htmlFor="addressLine1">Address Line 2</label>
          <input
            type="text"
            id="addressLine2"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleInputChange}
          />
          <label htmlFor="addressLine1">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
          <label htmlFor="addressLine1">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />
           <label htmlFor="addressLine1">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-actions">
          <button type="submit">Save Address</button>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;


