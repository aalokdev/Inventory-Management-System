import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function ItemForm() {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [submissionDate, setSubmissionDate] = useState(new Date());
  const [data, setData] = useState([]);

  const handleItemNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleItemQuantityChange = (e) => {
    setItemQuantity(e.target.value);
  };

  const handlePriceChange = (e) => {
    setItemPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store new item data
    const newItem = {
      itemName,
      itemQuantity,
      itemPrice,
      submissionDate: submissionDate.toLocaleDateString(),
    };

    // Update the data state
    setData((prevData) => [...prevData, newItem]);

    // Clear form fields
    setItemName('');
    setItemQuantity('');
    setItemPrice('');
    setSubmissionDate(new Date());
  };

  return (
    <div>
      <h3>Item Data</h3>
      <form onSubmit={handleSubmit}>
        <label style={{ marginRight: '10px' }}>
          Item Name:
          <input
            type="text"
            value={itemName}
            onChange={handleItemNameChange}
            placeholder="Enter item name"
          />
        </label>

        <label style={{ marginRight: '10px' }}>
          Quantity:
          <input
            type="number"
            value={itemQuantity}
            onChange={handleItemQuantityChange}
            placeholder="Enter quantity"
          />
        </label>

        <label style={{ marginRight: '10px' }}>
          Price:
          <input
            type="text"
            value={itemPrice}
            onChange={handlePriceChange}
            placeholder="Enter price"
          />
        </label>

        <label style={{ marginRight: '10px' }}>
          Date of Submission:
          <DatePicker
            selected={submissionDate}
            onChange={(date) => setSubmissionDate(date)}
            minDate={new Date()}
          />
        </label>

        <button type="submit" style={{ marginLeft: '10px' }}>Submit</button>
      </form>

      <h3>Submitted Items</h3>
      <table border="1" cellPadding="10" style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Date of Submission</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.itemName}</td>
              <td>{item.itemQuantity}</td>
              <td>{item.itemPrice}</td>
              <td>{item.submissionDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemForm;
