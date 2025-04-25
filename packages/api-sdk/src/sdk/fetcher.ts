import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

type Interceptor<T> = (value: T) => T | Promise<T>;

export class Fetcher {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create();
  }

  attachRequestInterceptor(
    interceptor: Interceptor<InternalAxiosRequestConfig>,
  ) {
    this.axiosInstance.interceptors.request.use(interceptor);
  }

  attachResponseInterceptor(interceptor: Interceptor<AxiosResponse>) {
    this.axiosInstance.interceptors.response.use(interceptor);
  }

  attachToken(token: string, headerKey = 'Authorization') {
    this.axiosInstance.defaults.headers.common[headerKey] = `Bearer ${token}`;
  }

  setBaseUrl(baseUrl: string) {
    this.axiosInstance.defaults.baseURL = baseUrl;
  }

  async request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.request<T>({ ...config });
  }
}
