'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Error = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-4">
      <Image
        src="/404-dark.png"
        alt="error"
        height="450"
        width="450"
        className="dark:hidden"
      />
      <Image
        src="/404-light.png"
        alt="error"
        height="450"
        width="450"
        className="hidden dark:block"
      />
      <h2 className="text-xl font-medium">Something went really wrong...</h2>
      <Button asChild>
        <Link href="/documents">Go back</Link>
      </Button>
    </div>
  );
};

export default Error;
