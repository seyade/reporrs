import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const cache = new InMemoryCache();

const client = new ApolloClient({
	cache,
	link: new HttpLink({ uri: 'http://localhost:7004/graphql' }),
});

export default client;
