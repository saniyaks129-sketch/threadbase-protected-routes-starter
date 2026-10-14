import { useAuth } from "../context/AuthContext";

export function RoleGate({ requiredRole, children }) {
  const { user } = useAuth();

  // Hide component if user role does not match
  if (user?.role !== requiredRole) {
    return null;
  }

  return children;
}