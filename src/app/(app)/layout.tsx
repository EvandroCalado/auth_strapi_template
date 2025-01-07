import { Header } from '@/components/shared';
import { getUserMe } from '@/services';

export const AppLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const user = await getUserMe();

  const isLogged = user.data ? true : false;

  return (
    <div className='bg-[url("/bg.jpg")] h-full'>
      <Header user={isLogged} />
      {children}
    </div>
  );
};

export default AppLayout;
