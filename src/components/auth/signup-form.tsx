import { cn } from '@/lib/utils';
import { Label } from '@radix-ui/react-label';

import { Logo } from '../shared/Logo';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
} from '../ui';

export const SignUpForm = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => {
  return (
    <div className={cn('flex flex-col gap-6 max-w-sm', className)} {...props}>
      <Card>
        <CardHeader className='flex flex-col items-center'>
          <Logo />
          <CardTitle className='text-2xl text-center'>Sign Up</CardTitle>
          <CardDescription>
            Enter your details to create a new account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className='flex flex-col gap-6'>
              <div className='grid gap-1'>
                <Label htmlFor='email' className='text-xs'>
                  Username
                </Label>
                <Input
                  id='username'
                  name='username'
                  type='text'
                  placeholder='username'
                  required
                />
              </div>
              <div className='grid gap-1'>
                <Label htmlFor='email' className='text-xs'>
                  Email
                </Label>
                <Input
                  id='email'
                  name='email'
                  type='text'
                  placeholder='name@example.com'
                  required
                />
              </div>
              <div className='grid gap-1'>
                <Label htmlFor='password' className='text-xs'>
                  Password
                </Label>
                <Input
                  id='password'
                  name='password'
                  type='password'
                  placeholder='password'
                  required
                />
              </div>
              <Button type='submit' className='w-full'>
                Sign Up
              </Button>
            </div>
            <div className='mt-4 text-sm text-center'>
              Have an account?{' '}
              <a href='/signin' className='underline underline-offset-4'>
                Sign In
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
