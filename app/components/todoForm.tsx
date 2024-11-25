import { ChangeEvent, useState } from 'react';
import './todoForm.scss';

export interface FormData {
  id: number;
  title: string;
  description: string;
}

interface TodoFormProps {
  addTodo: (todo: FormData) => void;
}

export default function TodoForm({ addTodo }: TodoFormProps) {
  const [formData, setFormData] = useState<FormData>({
    id: Date.now(),
    title: '',
    description: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTodo: FormData = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
    };

    addTodo(newTodo);

    setFormData({
      id: Date.now(),
      title: '',
      description: '',
    });
  };
  return (
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
  );
}
