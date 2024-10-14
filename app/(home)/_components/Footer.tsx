import { Button } from '@/components/ui/button';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <div className="flex justify-end item-center w-full bg-[#ebebeb] dark:bg-[#131313] pl-6 pr-6 pt-3 pb-3 mt-11">
      <Logo />
      <div className="md:ml-0 w-full justify-end md: flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size={'sm'}>
          Privacy Policies
        </Button>
        <Button variant="ghost" size={'sm'}>
          Term & Conditions
        </Button>
      </div>
    </div>
  );
};
