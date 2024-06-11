import axios from 'axios';

const API_URL = process.env.SERVER_URL;

export const registerUser = async data => {
	try {
		const response = await axios.post(`${API_URL}/register`, data);
		return response.data;
	} catch (error) {
		console.error('Erro ao registrar usuário:', error);
		throw error;
	}
};
