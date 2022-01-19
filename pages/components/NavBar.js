import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        {/* <a style={{ color: router.pathname == '/' ? 'red' : 'blue' }}>Home</a> */}
        <a className={router.pathname === '/' ? styles.active : ''}>Home</a>
      </Link>
      <Link href="/about">
        {/* <a style={{ color: router.pathname == '/about' ? 'red' : 'blue' }}>
          About
        </a> */}
        <a className={router.pathname === '/about' ? styles.active : ''}>
          About
        </a>
      </Link>
    </nav>
  );
}

export default NavBar;
