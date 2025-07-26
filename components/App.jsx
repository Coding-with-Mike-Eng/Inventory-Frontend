import React, { useState } from 'react';
import AddMedicineForm from './AddMedicineForm.jsx';  // <- match your folder name
import MedicineList from './MedicineList.jsx';

function App() {
    const [medicines, setMedicines] = useState([]);

    const addMedicine = (medicine) => {
        setMedicines([...medicines, medicine]);
    };

    return (
        <div className="container">
            <h1>Inventory Management System</h1>
            <AddMedicineForm onAdd={addMedicine} />
            <MedicineList medicines={medicines} />
        </div>
    );
}

export default App;
