import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth0ProviderWrapper from "./Auth0ProviderWrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipesPage from "./pages/RecipesPage"; // Use as homepage
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <ChakraProvider>
      <Auth0ProviderWrapper>
        <Router>
          <Header />
          <Routes>
            {/* Set RecipesPage as the default route */}
            <Route path="/" element={<RecipesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          <Footer />
        </Router>
      </Auth0ProviderWrapper>
    </ChakraProvider>
  );
};

export default App;
