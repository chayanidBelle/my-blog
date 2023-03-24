import jwtDecode from 'jwt-decode';
import { Axios } from './axios.service';
// import AxiosGolang from './axios.golang';

class AuthService {
  setAxiosInterceptors = (propx: any) => {
    const { onLogout } = propx;

    // Default Axios
    // AxiosGolang.defaults.headers.Accept = '*/*';
    // AxiosGolang.defaults.headers["Content-Type"] = "application/json";
    // AxiosGolang.defaults.withCredentials = false; // ถ้าใส่ true  แล้วจะติด Access-Control-Allow-Origin

    // On request
    // AxiosGolang.interceptors.request.use((request) => request);

    // On response
    Axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          const { status } = error.response;
          if (status === 401) {
            if (onLogout) {
              onLogout();
            }
          }
        }
        return Promise.reject(error);
      }
    );
  };

  // กำหนด token ที่ axios
  setAuthorization = (token: string) => {
    Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  // ลบ token ออกจาก axios
  delAuthorization = () => {
    delete Axios.defaults.headers.common.Authorization;
  };

  // ตรวจสอบ token ว่ามีอยู่จริงและยังไม่หมดอายุ
  isValidToken = (token?: string | null) => {
    if (!token) {
      return false;
    }
    const decoded: any = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  };

  getPayload = (token: any) => {
    const decode: any = jwtDecode(token);
    this.setAuthorization(token);
    return decode;
  };
}

const authService = new AuthService();

export default authService;
