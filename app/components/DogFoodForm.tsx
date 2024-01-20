"use client"

import React, { useState } from 'react'
import useDogsQuery from './useDogsQuery'

// types to be used for the inputs in the form
interface DogFormProps {
    onCalculate: (name: string, breed: string, weight: number, age: number) => void;
}

// react functional component passing in the types (defined above) and then passing the onCalculate function so we can set the parameters from the input fields
const DogFoodForm: React.FC<DogFormProps> = ({ onCalculate }) => {

    const { status, data, error, isFetching } = useDogsQuery();

    const [name, setName] = useState<string>('')
    const [breed, setBreed] = useState<string>('')
    const [weight, setWeight] = useState<number>(0)
    const [age, setAge] = useState<number>(0)

    const handleCalculate = () => {
        // when clicking calculate button we pass along the updated dog information to our calulation function
        onCalculate(name, breed, weight, age);
    };

    const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, ''); // Allow only numeric characters
        setWeight(value === '' ? 0 : parseInt(value, 10)); // Set the value to 0 if nothing, else set to the number provided
    };

    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        setAge(value === '' ? 0 : parseInt(value, 10));
    };

  return (
    <form className='mt-5 mb-5'>
        <div className='blk'>
            <div className='input-cntnr'>
                <label htmlFor='breed'>Name:</label>
                <input
                    type='text'
                    id='breed'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='input-cntnr'>
                <label htmlFor='breed'>Breed:</label>
                <select
                    id='breed'
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                >
                    {data?.message && Object.keys(data.message).map((messages) => {
                        return (
                            <option key={messages}>{messages}</option>
                        )
                    }) 

                    }
                </select>
            </div>
            <div className='input-cntnr'>
                <label htmlFor='weight'>Weight (lbs):</label>
                <input
                    type='text'
                    id='weight'
                    value={weight}
                    onChange={handleWeightChange}
                />
            </div>
            <div className='input-cntnr'>
                <label htmlFor='age'>Age:</label>
                <input
                    type='text'
                    id='age'
                    value={age}
                    onChange={handleAgeChange}
                />
            </div>
        </div>
        <div className='mt-5 mb-5 flx btn-cntnr'>
            <button type='button' onClick={handleCalculate}>Calculate</button>
        </div>
    </form>
  )
}

export default DogFoodForm;