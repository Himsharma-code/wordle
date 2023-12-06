import { register as registerApi } from "src/api/auth";
import { useAuth } from "src/context/AuthContext";
import Cookies from "js-cookie";

const useAuthActions = () => {
  const { data, actions } = useAuth();
  const { user } = data;
  const { setUser } = actions;

  const register = async (body) => {
    setUser({ ...user, loading: true });
    try {
      const response = await registerApi(body);
      const user = response?.data?.user || null;
      Cookies.set("token", user?.token || "");
      setUser({ data: user, loading: false });
      return { status: 1, data: response };
    } catch (error) {
      setUser({ user: null, loading: false, error: error });
      return { status: 0, data: error };
    }
  };

  return { register };
};

export { useAuthActions };
