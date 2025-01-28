import { ChakraProvider } from '@chakra-ui/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // React Router
import Auth0ProviderWrapper from '../Auth0ProviderWrapper';
import { routesConfig } from '../routes'; // Adjusted import
import Layout from '../src/Layout';

const App = () => {
  return (
    <ChakraProvider>
      <Auth0ProviderWrapper>
        <Router>
          <Layout>
            <Routes>
              {routesConfig.map(({ path, component: Component }, index) => (
                // Wrap the component in JSX syntax: <Component />
                <Route key={index} path={path} element={<Component />} />
              ))}
            </Routes>
          </Layout>
        </Router>
      </Auth0ProviderWrapper>
    </ChakraProvider>
  );
};

export default App;
