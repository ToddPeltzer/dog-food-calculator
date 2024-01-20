import React from 'react'
import DogFoodForm from '../components/DogFoodForm'

export default function calculator() {
  return (
    <main className='mt-4 ml-4 mr-4 mb-4'>
        <h1 className='mb-4 text-4xl font-extrabold'>Calculate Your Dogs Dietary Needs</h1>
        <DogFoodForm />
    </main>
  )
}
