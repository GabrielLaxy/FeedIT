import axios from 'axios';

const API_URL = 'https://e4ea-2804-14c-bf3a-8061-8dbc-e182-2095-5deb.ngrok-free.app/register';

export const registerUser = async data => {
	try {
		const response = await axios.post(`${API_URL}/register`, data);
		return response.data;
	} catch (error) {
		console.error('Erro ao registrar usuário:', error);
		throw error;
	}
};
