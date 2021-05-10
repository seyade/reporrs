import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
// import { ApolloProvider } from 'react-apollo';
// import { ApolloProvider } from '@apollo/client/react';

import App from './App';
import reportWebVitals from './reportWebVitals';
import graphqlClient from './api/graphql';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;

		&::before, 
		&::after{
			box-sizing: border-box;
		}
	}
  body {
    font-family: 'Montserrat', sans-serif;
  }
`;

ReactDOM.render(
	<ApolloProvider client={graphqlClient}>
		<React.StrictMode>
			<GlobalStyle />
			<App />
		</React.StrictMode>
	</ApolloProvider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
