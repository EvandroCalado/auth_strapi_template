import { cn } from '@/lib/utils';
import { Label } from '@radix-ui/react-label';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
} from '../ui';

export const SignInForm = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => {
  return (
    <div className={cn('flex flex-col gap-6 max-w-sm', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className='text-2xl text-center'>Sign In</CardTitle>
          <CardDescription>
            Enter your details to sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className='flex flex-col gap-6'>
              <div className='grid gap-1'>
                <Label htmlFor='email' className='text-xs'>
                  Email
                </Label>
                <Input
                  id='identifier'
                  name='identifier'
                  type='text'
                  placeholder='username or email'
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
                Sign In
              </Button>
            </div>
            <div className='mt-4 text-sm text-center'>
              Don&apos;t have an account?{' '}
              <a href='/signup' className='underline underline-offset-4'>
                Sign Up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
