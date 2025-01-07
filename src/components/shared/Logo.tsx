import { Fingerprint } from 'lucide-react';
import Link from 'next/link';

import { Button } from '../ui';

export const Logo = () => {
  return (
    <Link
      href='/'
      className='flex items-center gap-2 text-xl text-white font-semibold'
    >
      <Button size='icon'>
        <Fingerprint />
      </Button>
      <span className='max-md:hidden'>Strapi Auth</span>
    </Link>
  );
};
