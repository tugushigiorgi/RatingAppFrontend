import { BrowserRouter as Router, Route, Routes , Switch} from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import PasswordResetPage from "./Pages/PasswordResetPage/PasswordResetPage";
 import ProfilePage from "./Pages/ProfilePage/ProfilePage";
 import MainPage from "./Pages/MainPage/MainPage";
import SellerProfilePage from "./Pages/SellerProfilePage/SellerProfilePage";
import AdminPage from "./Pages/AdminPage/AdminPage";
 function App() {
  return (
    <Router>
    <Routes> 

      
    <Route
              path="/seller/:sellerid"
              exact
              element={<SellerProfilePage/>}
          />
    <Route
              path="/admin"
              exact
              element={<AdminPage/>}
          />


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
