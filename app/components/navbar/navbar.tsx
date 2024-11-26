import Link from 'next/link';
import './navbar.scss';

const navLinks = [
  {
    id: 1,
    title: 'Home',
    href: '/',
  },
  {
    id: 2,
    title: 'Movies',
    href: '/movies',
  },
  {
    id: 3,
    title: 'Login',
    href: '/',
  },
];

export default function Navbar() {
  return (
    <nav>
      <Link href='/'>
        <h1>
          Scss <span>App</span>
        </h1>
      </Link>
      <div className='nav-links-container'>
        {navLinks.map((link) => (
          <Link className='nav-link' href={link.href} key={link.id}>
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
