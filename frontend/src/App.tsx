import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/globalStyles";
import Reset from "./styles/reset";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <AppRoutes />
      <Reset />
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={550}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default App;
