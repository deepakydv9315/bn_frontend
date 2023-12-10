import React, { Fragment, useState } from "react";
import "./AddressBook.scss";
import SideBar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

const AddressBook = ({ history }) => {
  let carts = useSelector((state) => state.products.carts);
  const { user } = useSelector((state) => state.user);
  const [addresses, setAddresses] = useState([
    {
      name: 'John Doe',
      address: '123 Main St, Apt 4B, City, Country',
      phoneNumber: '555-555-5555',
    },
    {
      name: 'John Doe',
      address: '123 Main St, Apt 4B, City, Country',
      phoneNumber: '555-555-5555',
    },
  ]);

  const [isAddAddressDialogOpen, setIsAddAddressDialogOpen] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: '',
    address: '',
    phoneNumber: ''
  });

  const handleAddAddress = () => {
    setAddresses([...addresses, newAddress]);
    setIsAddAddressDialogOpen(false);
    setNewAddress({ name: '', address: '', phoneNumber: '' });
  };

  const handleEditAddress = (index) => {
    setIsAddAddressDialogOpen(true);
    setNewAddress({
      ...addresses[index],
    });
  };

  const handleRemoveAddress = (index) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
  };

  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">Address Book</h1>
          <div className="address-list">
            {user &&
              user?.shippingAddress &&
              user?.shippingAddress?.map((item, index) => (
                <div key={index} className="address-item">
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.address}</p>
                    <p>{item.phone}</p>
                  </div>
                  <div className="address-options">
                    <button onClick={() => handleEditAddress(index)} style={{ border: "none" }} ><FontAwesomeIcon icon={faEdit} /></button>
                    <button onClick={() => handleRemoveAddress(index)} style={{ border: "none" }} ><FontAwesomeIcon icon={faTimes} /></button>
                  </div>
                </div>
              ))}
          </div>
          {isAddAddressDialogOpen && (
            <div className="add-address-dialog">
              <div className="close-icon" onClick={() => setIsAddAddressDialogOpen(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
              <h4>Add New Address</h4>
              <input
                type="text"
                placeholder="Name"
                value={newAddress.name}
                onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Address"
                value={newAddress.address}
                onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={newAddress.phoneNumber}
                onChange={(e) => setNewAddress({ ...newAddress, phoneNumber: e.target.value })}
              />
              <button onClick={handleAddAddress}>Add</button>
            </div>
          )}
          <br></br>
          <button onClick={() => setIsAddAddressDialogOpen(true)}>Add New Address</button>
        </div>
      </div>
    </Fragment >
  );
};

export default AddressBook;

