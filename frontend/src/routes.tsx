import { Route, Routes } from "react-router-dom";
import { HomeProvider } from "./providers/HomeProvider/HomeProvider";
import { UserProvider } from "./providers/UserProvider/UserContext";
import Register from "./pages/Register";
import { CarProvider } from "./providers/CarProvider/CarContext";
import { ImageProvider } from "./providers/ImageProvider/ImageContext";
import { CommentProvider } from "./providers/CommentProvider/CommentContext";
import UserPage from "./pages/UserPage";
import ResetPasswordPage from "./pages/resetPassword";
import Welcome from "./pages/Welcome";
import UserAds from "./pages/UserAds";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import ProfileView from "./pages/ProfileView";
import { ProtectedRoutes } from "./components/ProtectedRoutes";

const AppRoutes = () => {
  return (
    <UserProvider>
      <CarProvider>
        <ImageProvider>
          <CommentProvider>
            <HomeProvider>
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/resetPassword/:token"
                  element={<ResetPasswordPage />}
                />
                <Route path="/product/:productId" element={<ProductPage />} />
                <Route path="/userPage/:userId" element={<UserPage />} />
                <Route path="/user/:userId" element={<UserAds />} />
                <Route path="/" element={<ProtectedRoutes />}>
                  <Route path="/profile" element={<ProfileView />} />
                  <Route path="/userPage" element={<UserPage />} />
                </Route>
              </Routes>
            </HomeProvider>
          </CommentProvider>
        </ImageProvider>
      </CarProvider>
    </UserProvider>
  );
};

export default AppRoutes;
