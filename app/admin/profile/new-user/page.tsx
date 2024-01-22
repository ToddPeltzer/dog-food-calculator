'use client'

import NewUserForm from "@/app/components/NewUserForm";
import { useState } from 'react';

interface FormData {
  firstname: string;
  lastname: string;
  dogname: string;
  dogbreed: string;
  dogweight: string;
  dogage: string;
}

interface NewUserProps {
  formData: FormData;
  selectedBreed: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function NewUser() {

  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    dogname: '',
    dogbreed: '',
    dogweight: '',
    dogage: '',
  });

  const [selectedBreed, setSelectedBreed] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log({name, value})

    if (name === 'dogbreed') {
      setSelectedBreed(value);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <main>
      <h1>New User Page</h1>
      <NewUserForm
        updateUser={false}
        formData={formData}
        selectedBreed={selectedBreed}
        handleChange={handleChange}
      />
    </main>
  );
}
