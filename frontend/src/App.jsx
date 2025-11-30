import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './core/layout/DashboardLayout';
import Login from './modules/auth/Login';
import SettingsPage from "./modules/settings/SettingsPage";
import BlogPage from './plugins/blog/BlogPage';
import DashboardPage from './pages/DashboardPage';
import useAuth from './modules/auth/useAuth';

export default function App() {
  // const { authenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<SettingsPage />} />

        {/* Protected Dashboard Routes */}
        <Route
          path="/*"
          element={
            // authenticated ? (
            <DashboardLayout>
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </DashboardLayout>
            // ) : (
            // <Navigate to="/login" />
            // )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
