import axios from 'axios';
import { setIdPaciente } from '../storage';
import { SERVER_URL } from '@env';

const API_URL =
	'https://9c63-2804-14c-bf3a-8061-4976-4c7-486-2363.ngrok-free.app';

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
		setIdPaciente(response.data.idPaciente);
		return response.data;
	} catch (error) {
		console.error('Erro ao adicionar nome do personagem:', error);
		throw error;
	}
};

