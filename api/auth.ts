import axiosInstance from '@/lib/axios'
import { AUTH_URL } from '@/constants/endpoints'
import { LoginDataRequest } from '@/features/auth'

export const authAPI = {
  login: (data: LoginDataRequest) => axiosInstance.post(AUTH_URL.LOGIN, data),
}
