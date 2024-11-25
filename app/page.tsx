'use client';
import { ChangeEvent, useState } from 'react';
import './page.scss';

interface FormData {
  id: number;
  title: string;
  description: string;
}

export default function Home() {
  const [formData, setFromData] = useState<FormData>({
    id: Date.now(),
    title: '',
    description: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFromData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newFromData = {
      title: '',
      description: '',
    };
    setFromData((prev) => ({ ...prev, ...newFromData }));
    console.log(formData);
  };

  return (
    <div className='main-container'>
      <form onSubmit={handleSubmit} className='form-container'>
        <h1>Hello, Next.js!</h1>
        <input
          name='title'
          value={formData.title}
          onChange={handleChange}
          type='text'
          placeholder='Enter title'
        />
        <input
          name='description'
          value={formData.description}
          onChange={handleChange}
          type='text'
          placeholder='Enter description'
        />
        <button className='submit-btn'>Submit</button>
      </form>
    </div>
  );
}
