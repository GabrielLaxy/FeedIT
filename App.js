import React from 'react';
import Routes from './screens/routes'
import { StatusProvider } from './statusContext';

export default function App() {
  return (
		<StatusProvider>
			<Routes />
		</StatusProvider>
	);
}
