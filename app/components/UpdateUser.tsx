'use client'

import NewUser from "@/app/components/NewUserForm";
import { getXataClient } from "@/src/xata";
import { Identifiable } from "@xata.io/client";
import { useState } from "react";

interface FormData {
    firstname: string;
    lastname: string;
    dogname: string;
    dogbreed: string;
    dogweight: string;
    dogage: string;
}

export default function UpdateUser({ record }: any) {
  
  const [formData, setFormData] = useState<FormData>({
    firstname: record?.firstname || "",
    lastname: record?.lastname || "",
    dogname: record?.dogname || "",
    dogbreed: record?.dogbreed || "",
    dogweight: record?.dogweight || "",
    dogage: record?.dogage || "",
  });

  const [selectedBreed, setSelectedBreed] = useState<string>(record?.dogbreed || "");
  
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
        <NewUser
          updateUser={true}
          formData={formData}
          selectedBreed={selectedBreed}
          handleChange={handleChange}
          id={record.id}
        />
    </main>
  )
}