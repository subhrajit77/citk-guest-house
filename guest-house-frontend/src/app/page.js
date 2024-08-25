import styles from "./page.module.css";
import ProtectedRoute from "../../components/auth/protected/ProtectedRoute";
export default function Home() {
  return (
    <ProtectedRoute>
      <p>Home Page</p>
      <a href="/auth/login">Login</a>
    </ProtectedRoute>
    
  );
}

