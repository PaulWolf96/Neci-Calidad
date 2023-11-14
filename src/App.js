import AppRoutes from "./router/Routes";
import './styles/app.css';
import { StateProvider } from "./context/StateContext";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <StateProvider>
      <MovieProvider>
        <AppRoutes />
      </MovieProvider>
    </StateProvider>
  );
}

export default App;
