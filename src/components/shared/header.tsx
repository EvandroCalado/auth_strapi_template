import Link from 'next/link';

import { Button } from '../ui';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <header className='container flex items-center justify-between p-5 mx-auto'>
      <Logo />

      <Button asChild>
        <Link href='/signin'>Sign In</Link>
      </Button>
    </header>
  );
};
