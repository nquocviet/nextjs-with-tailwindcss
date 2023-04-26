import axios, {
	AxiosError,
	AxiosResponse,
	InternalAxiosRequestConfig as AxiosRequestConfig,
} from 'axios'

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
	if (process.env.NODE_ENV === 'development') {
		console.info(`[request] [${JSON.stringify(config)}]`)
	}
	return config
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
	if (process.env.NODE_ENV === 'development') {
		console.error(`[request error] [${JSON.stringify(error)}]`)
	}
	return Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
	if (process.env.NODE_ENV === 'development') {
		console.info(`[response] [${JSON.stringify(response)}]`)
	}
	return response
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
	if (process.env.NODE_ENV === 'development') {
		console.error(`[response error] [${JSON.stringify(error)}]`)
	}
	return Promise.reject(error)
}

const API_BASE_URL = process.env.API_BASE_URL

const axiosInstance = axios.create({
	baseURL: API_BASE_URL,
})

axiosInstance.interceptors.request.use(onRequest, onRequestError)
axiosInstance.interceptors.response.use(onResponse, onResponseError)

export default axiosInstance
