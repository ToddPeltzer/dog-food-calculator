"use client"

import React, { useState } from 'react'
import DogFoodForm from '../components/DogFoodForm'

const Calculator: React.FC = () => {

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

  };

  return (
    <main className='mt-4 ml-4 mr-4 mb-4'>
        <h1 className='mb-4 text-4xl font-extrabold'>Calculate Your Dogs Raw Food Dietary Needs</h1>
        <DogFoodForm onCalculate={onCalculate}/>
        {foodAmountStatement && (
          <h4>{foodAmountStatement}</h4>
      )}
    </main>
  )
}

export default Calculator;