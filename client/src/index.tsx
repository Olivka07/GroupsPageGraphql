import { createRoot } from 'react-dom/client';
import App from './app/index';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { API_URL } from './consts';

const root = createRoot(document.getElementById('root'));

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: `${API_URL}/graphql`
});

root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
