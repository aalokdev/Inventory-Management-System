import React, { useState } from 'react';

const SupplierForm = () => {
  const [supplierName, setSupplierName] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const supplierData = {
      supplierName,
      country,
      city,
      pinCode,
      phoneNumber,
      itemName,
      quantity,
      unitPrice,
    };

    // Update the data state to add the new entry
    setData((prevData) => [...prevData, supplierData]);

    // Clear the form fields after submission
    setSupplierName('');
    setCountry('');
    setCity('');
    setPinCode('');
    setPhoneNumber('');
    setItemName('');
    setQuantity('');
    setUnitPrice('');
  };

  return (
    <div>
      <h2>Supplier Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Supplier Name:</label>
          <input
            type="text"
            value={supplierName}
            onChange={(e) => setSupplierName(e.target.value)}
            placeholder="Supplier Name"
          />
        </div>

        <div>
          <label>Country:</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country"
          />
        </div>

        <div>
          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
          />
        </div>

        <div>
          <label>Pin Code:</label>
          <input
            type="text"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            placeholder="Pin Code"
          />
        </div>

        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
          />
        </div>

        <div>
          <label>Item Name:</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Item Name"
          />
        </div>

        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Quantity"
          />
        </div>

        <div>
          <label>Unit Price:</label>
          <input
            type="text"
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
            placeholder="Unit Price"
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <h2>Submitted Data</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Supplier</th>
            <th>Country</th>
            <th>City</th>
            <th>Pin Code</th>
            <th>Phone Number</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.supplierName}</td>
              <td>{entry.country}</td>
              <td>{entry.city}</td>
              <td>{entry.pinCode}</td>
              <td>{entry.phoneNumber}</td>
              <td>{entry.itemName}</td>
              <td>{entry.quantity}</td>
              <td>{entry.unitPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierForm;
