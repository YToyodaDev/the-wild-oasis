import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  // Log user and role for debugging
  // console.log("User data in useUser hook: ", user);
  // const isAuthenticated = user?.user?.role === "authenticated";
  // console.log("User role in useUser hook: ", isAuthenticated);
  // console.log("Is Authenticated: ", isAuthenticated);

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}

export function useUserOriginal() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
