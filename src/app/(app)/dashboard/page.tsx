import { getUserMe } from '@/services';

const DashboardPage = async () => {
  const user = await getUserMe();

  return (
    <div className='flex flex-col items-center justify-center w-full gap-6 h-4/5'>
      <div className='flex items-center justify-center w-4/5 h-10 rounded-full md:w-1/3 md:h-24 bg-gradient-to-r from-zinc-500 via-zinc-600 to-zinc-700'>
        <h2 className='text-xl font-bold text-transparent bg-white md:text-4xl bg-clip-text'>
          Dashboard Page
        </h2>
      </div>

      <div className='flex flex-col text-muted-foreground'>
        <span>
          <strong>Username:</strong> {user?.data?.username}
        </span>
        <span>
          <strong>Email:</strong> {user?.data?.email}
        </span>
      </div>
    </div>
  );
};

export default DashboardPage;
