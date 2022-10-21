import { useRoutes } from "react-router-dom";
import AppFooter from "./components/app-footer";
import AppHeader from "./components/app-header";
import useScrollTop from "./hooks/useScrollTop";
import routes from "./routers";
function App() {
  const Router = useRoutes(routes);
  useScrollTop();

  return (
    <div>
      <AppHeader />
      <div className="content">{Router}</div>
      <AppFooter />
    </div>
  );
}

export default App;
