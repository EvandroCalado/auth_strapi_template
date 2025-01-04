import { Fingerprint } from 'lucide-react';
import Link from 'next/link';

import { Button } from '../ui';

export const Logo = () => {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <Fingerprint />
      </Link>
    </Button>
  );
};
