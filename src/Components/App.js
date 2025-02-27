import { BrowserRouter as Router, Route, Routes , Switch} from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import PasswordResetPage from "./Pages/PasswordResetPage/PasswordResetPage";
 
function App() {
  return (
    <Router>
    <Routes> 

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


    </Routes>

    </Router>

  );
}

export default App;
