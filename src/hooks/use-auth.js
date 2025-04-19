import { useContext } from "react";
import { AuthContext } from "../providers/auth-context";

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
