import { useAuth } from 'hooks/useAuth';
import { UserMenu } from '../userMenu/UserMenu';
import { AuthNav } from '../authNav/AuthNav';
import { Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header
    >
      <nav
        style={{
          display: 'flex',
          gap: '30px',
        }}
      >
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      </nav>

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
