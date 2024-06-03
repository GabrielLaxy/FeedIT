import React, { createContext, useState, useContext } from 'react';
import Status from './status';

const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
	const [status, setStatus] = useState(new Status({}));

	const updateStatus = data => {
		const updatedStatus = new Status(status);
		updatedStatus.update(data);
		setStatus(updatedStatus);
	};

	return (
		<StatusContext.Provider value={{ status, updateStatus }}>
			{children}
		</StatusContext.Provider>
	);
};

export const useStatus = () => useContext(StatusContext);
