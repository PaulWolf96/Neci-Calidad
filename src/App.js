import AppRoutes from "./router/Routes";
import './styles/app.css';
import { ApiProvider } from "./context/ApiContext";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <ApiProvider>
      <MovieProvider>
        <AppRoutes />
      </MovieProvider>
    </ApiProvider>
  );
}

export default App;
