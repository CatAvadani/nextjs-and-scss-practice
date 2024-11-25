import './page.scss';
import variables from './variables.module.scss';

export default function Home() {
  return (
    <div className='main-container'>
      <div className='form-container'>
        <h1
          style={{
            color: variables.primaryColor,
            background: variables.backgroundColor,
          }}
        >
          Hello, Next.js!
        </h1>
      </div>
    </div>
  );
}
