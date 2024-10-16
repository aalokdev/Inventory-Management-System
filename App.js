import React, {useState } from 'react';
import ItemForm from './components/ItemForm';
import SupplierForm from './components/SupplierForm';


function App()
{
    const [showItemFields, setShowItemFields]=useState(false);
    const [showSupplierFields, setShowSupplierFields]= useState(false);

    return(
        <div>
            <h1>Inventory Management System</h1>
            <div>
            <input
            type="checkbox"
            id="item"
            onChange={() => setShowItemFields(!showItemFields)}
            />
            <label htmlFor="item">Item</label>

            <input 
            type="checkbox"
            id="supplier"
            onChange={()=> setShowSupplierFields(!showSupplierFields)}
            />
            <label htmlFor="supplier">Supplier</label>
            </div>

            {showItemFields && <ItemForm />}
            {showSupplierFields && <SupplierForm/>}
            </div>

    );
}
export default App;