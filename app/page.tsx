import './page.scss';

export default function Home() {
  return (
    <div className='main-container'>
      <div className='form-container'>
        <h1>Hello, Next.js!</h1>
        <input type='text' placeholder='Enter title' />
        <input type='text' placeholder='Enter description' />
        <button className='submit-btn'>Submit</button>
      </div>
    </div>
  );
}
