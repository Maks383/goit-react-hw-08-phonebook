import { AuthNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div
    >
      <AuthNavLink to="/register">
        <span>Sign Up</span>
      </AuthNavLink>
      <AuthNavLink to="/login">
        <span>Log In</span>
      </AuthNavLink>
    </div>
  );
};
