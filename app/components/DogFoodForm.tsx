"use client"
import React, { useState } from 'react'

export default function DogFoodForm() {

    const [breed, setBreed] = useState('')
    const [weight, setWeight] = useState('')
    const [age, setAge] = useState('')


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
            type='number'
            id='weight'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
        />
        <label htmlFor='age'>Age:</label>
        <input
            type='number'
            id='age'
            value={age}
            onChange={(e) => setAge(e.target.value)}
        />
        <button type='button'>Calculate</button>
    </form>
  )
}
