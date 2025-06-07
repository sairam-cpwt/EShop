export const getUserRoles = (): string | null => {
  try {
    const user = localStorage.getItem("user_role");

    if (!user) return null;

    const userData = JSON.parse(user);
    return userData;
  } catch (err) {
    console.log(err, "While fetching user roles");
    return null;
  }
};

export const hasRequiredRole = (roles: string[], requiredRoles: string[]) => {
  if (!roles || !requiredRoles) return false;

  return requiredRoles.some((role) => roles.includes(role));
};
