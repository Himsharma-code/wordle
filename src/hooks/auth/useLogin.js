import { register as registerApi } from "src/api/auth";
import { useAuth } from "src/context/AuthContext";

const useAuthActions = () => {
  const { data, actions } = useAuth();
  const { user } = data;
  const { setUser } = actions;

  const register = async (body) => {
    setUser({ ...user, loading: true });
    try {
      const response = await registerApi(body);
      console.log("response", response);
      setUser({ user: response, loading: false });
    } catch (error) {
      setUser({ user: null, loading: false, error: error });
    }
  };

  return { register };

  //   return useMutation((input) => register(input), {
  //     onSuccess: (response, { rememberMe }) =>
  //       loginUser({ ...response, rememberMe }),
  //     onError: (error) => {
  //       if (error?.response?.field) {
  //         setError(error?.response?.field || "password", {
  //           type: "API_ERROR",
  //           message:
  //             error?.response?.message ||
  //             "There is an existing account associated with this email address",
  //         });
  //       } else {
  //       }
  //     },
  //   });
};

export { useAuthActions };
