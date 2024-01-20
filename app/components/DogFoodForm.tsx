"use client"
import React, { useState } from 'react'

// types to be used for the inputs in the form
interface DogFormProps {
    onCalculate: (breed: string, weight: number, age: number) => void;
}

// react functional component passing in the types (defined above) and then passing the onCalculate function so we can set the parameters from the input fields
const DogFoodForm: React.FC<DogFormProps> = ({ onCalculate }) => {

    const [breed, setBreed] = useState<string>('')
    const [weight, setWeight] = useState<number>(0)
    const [age, setAge] = useState<number>(0)

    const handleCalculate = () => {
        // when clicking calculate button we pass along the updated dog information to our calulation function
        onCalculate(breed, weight, age);
    };

    const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, ''); // Allow only numeric characters
        setWeight(value || ''); // Set the value or an empty string if it's not a number
    };

    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        setAge(value || '');
    };

  return (
    <form>
        <label htmlFor='breed'>Breed:</label>
        <input
            type='text'
            id='breed'
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
        />

        <label htmlFor='weight'>Weight (lbs):</label>
        <input
            type='text'
            id='weight'
            value={weight}
            onChange={handleWeightChange}
        />

        <label htmlFor='age'>Age:</label>
        <input
            type='text'
            id='age'
            value={age}
            onChange={handleAgeChange}
        />

        <div className='mt-5 mb-5'>
            <button type='button' onClick={handleCalculate}>Calculate</button>
        </div>
    </form>
  )
}

export default DogFoodForm;