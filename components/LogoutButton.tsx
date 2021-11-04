import { useRouter } from 'next/dist/client/router';
import { FC } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useLogoutMutation } from '../generated/graphql';
import Button from './ui-components/Button';

const LogoutButton: FC = () => {
   const router = useRouter();
   const [, logout] = useLogoutMutation();
   const handleLogout = async () => {
      await logout();
      router.push('/');
   };

   return (
      <div className="absolute top-0 right-0">
         <Button.Rounded onClick={handleLogout}>
            <FiLogOut size="22" />
         </Button.Rounded>
      </div>
   );
};
export default LogoutButton;
