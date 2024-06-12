import axios from 'axios';
import { SERVER_URL } from '@env';

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

export const loginUser = async data => {
	try {
		const response = await axios.post(`${API_URL}/login`, data);
		return response.data;
	} catch (error) {
		console.error('Erro ao fazer login:', error);
		throw error;
	}
};

export const addCharacterName = async data => {
	try {
		const response = await axios.post(`${API_URL}/add-character-name`, data);
		return response.data;
	} catch (error) {
		console.error('Erro ao adicionar nome do personagem:', error);
		throw error;
	}
};
