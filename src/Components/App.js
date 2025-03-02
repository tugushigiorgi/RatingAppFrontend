import { BrowserRouter as Router, Route, Routes , Switch} from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import PasswordResetPage from "./Pages/PasswordResetPage/PasswordResetPage";
 import ProfilePage from "./Pages/ProfilePage/ProfilePage";
 import MainPage from "./Pages/MainPage/MainPage";
function App() {
  return (
    <Router>
    <Routes> 
    <Route
              path="/"
              exact
              element={<MainPage/>}
          />
        <Route
              path="/login"
              exact
              element={<LoginPage />}
          />
 <Route
              path="/register"
              exact
              element={<RegisterPage />}
          />
    
    <Route
                path="/reset"
                exact
                element={<PasswordResetPage />}    
                />
   <Route
                path="/profile"
                exact
                element={<ProfilePage />}    
                />

    </Routes>

    </Router>

  );
}

export default App;
