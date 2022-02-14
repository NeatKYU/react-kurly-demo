import axios from 'axios';

const customAxios = axios.create({
	baseURL: 'http://localhost:8000'
})

export const Fetcher = async (url: string) => {
	return await customAxios.get(url).then((res) => res.data);
}