import { logoutUser } from '@/actions';
import Link from 'next/link';

import { Button } from '../ui';
import { Logo } from './Logo';

export const Header = ({ user }: { user: boolean }) => {
  return (
    <header className='container flex items-center justify-between p-5 mx-auto'>
      <Logo />

      <nav className='flex items-center gap-4 font-semibold'>
        <Link href='/'>Home</Link>
        <Link href='/dashboard'>Dashboard</Link>
      </nav>

      {user ? (
        <form action={logoutUser}>
          <Button>Logout</Button>
        </form>
      ) : (
        <Button asChild>
          <Link href='/signin'>Sign In</Link>
        </Button>
      )}
    </header>
  );
};
