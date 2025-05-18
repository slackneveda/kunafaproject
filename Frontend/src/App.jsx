import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/AboutPage/About";
import Menu from "./pages/MenuPage/Menu";
import Gallery from "./pages/GalleryPage/Gallery";
import SignUp from "./pages/SignUpPage/SignUp";
import LoginPage from "./pages/LoginPage/LoginPage";
import { useState } from "react";

// Protected Route Component
const ProtectedRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("access") // Check for access token
  );

  const handleLogin = (token) => {
    localStorage.setItem("access", token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("access");
    setIsAuthenticated(false);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/login"
            element={<LoginPage onLogin={handleLogin} />}
          />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected Routes with Navbar */}
          <Route
            path="/"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                element={
                  <>
                    <Navbar onLogout={handleLogout} />
                    <Body />
                  </>
                }
              />
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                element={
                  <>
                    <Navbar onLogout={handleLogout} />
                    <About />
                  </>
                }
              />
            }
          />
          <Route
            path="/menu"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                element={
                  <>
                    <Navbar onLogout={handleLogout} />
                    <Menu />
                  </>
                }
              />
            }
          />
          <Route
            path="/gallery"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                element={
                  <>
                    <Navbar onLogout={handleLogout} />
                    <Gallery />
                  </>
                }
              />
            }
          />
        </Routes>

        {/* Footer is also protected */}
        {isAuthenticated && <Footer />}
      </BrowserRouter>
    </>
  );
}

export default App;
