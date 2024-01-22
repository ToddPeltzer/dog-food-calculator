"use client"

import React, { useState, useEffect } from 'react'
import DogFoodForm from '../components/DogFoodForm'

const Calculator: React.FC = () => {

    // Get the initial value of numCalc from session storage or use 0 if it doesn't exist
    const initialNumCalc = parseInt(sessionStorage.getItem('numCalc') || '0', 10);

    const [numCalc , setNumCalc] = useState<number>(initialNumCalc)
    
    // Update session storage whenever numCalc changes
    useEffect(() => {
        sessionStorage.setItem('numCalc', numCalc.toString());
    }, [numCalc]);

    const [foodAmountStatement, setFoodAmountStatement] = useState<string>('')
    
    const onCalculate = (name: string, breed: string, weight: number, age: number) => {
    
        let foodAmount: string = '';

        if (weight < 10) {
            foodAmount = '1lb'
        } else if (weight < 30) {
            foodAmount = '2lbs'
        } else if (weight < 60) {
            foodAmount = '3lbs'
        } else if (weight < 100) {
            foodAmount = '4lbs'
        } else {
            foodAmount = '5-8lbs'
        }

        setFoodAmountStatement(`${name}, your ${age} year old ${breed}, needs to eat around ${foodAmount} of raw food per day`)
        setNumCalc((prevState: number) => prevState + 1)

  };

  return (
    <main className='mt-4 ml-4 mr-4 mb-4'>
        <h1 className='mb-4 text-4xl font-extrabold'>Calculate Your Dogs Raw Food Dietary Needs</h1>
        <DogFoodForm onCalculate={onCalculate}/>
        {foodAmountStatement && (
          <h4>{foodAmountStatement}</h4>
      )}
      {!numCalc ? "" : <p>You ran the calculator {numCalc} time(s) in this session.</p>}
    </main>
  )
}

export default Calculator;