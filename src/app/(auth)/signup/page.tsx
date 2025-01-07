import { AuthBlock, SignUpForm } from '@/components/auth';

const SignUpPage = () => {
  return (
    <div className='grid grid-cols-1 items-center justify-center md:grid-cols-5 h-full'>
      <div className='col-span-2 max-md:hidden h-full flex justify-end bg-primary'>
        <AuthBlock
          label='Sign Up'
          title='Welcome!'
          subTitle='Create you account'
        />
      </div>

      <div className='col-span-3 flex items-center justify-center'>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
