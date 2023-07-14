import "./assets/css/bootstrap-5.0.2-dist/css/bootstrap.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import { default as Navbar} from "./components/Navbar/index"
import { Login, Main, Navbar } from "./components/index"
import { navbar } from "./constant/url";
import { useEffect, useState } from "react";
import { checktoken } from "./services/login_service";

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      let mounted = true;
      checktoken()
        .then(items => {
          if (mounted) {
            if(items.status === "OK") {
              setAuth(true)
            }
          }
        })
      return () => mounted = false;
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {auth === false
            ?
            <Route path="/auth" element={<Login auth={auth} setAuth={setAuth} />} />
            : <Route path="/home/*" element={<Main auth={auth} setAuth={setAuth} />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
