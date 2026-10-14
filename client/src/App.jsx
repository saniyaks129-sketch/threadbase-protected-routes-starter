import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";

// Inside your Router / Routes component:
<Routes>
  {/* Public Routes */}
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />

  {/* Protected Routes */}
  <Route
    path="/dashboard"
    element={
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    }
  />
  <Route
    path="/profile"
    element={
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    }
  />
  <Route
    path="/threads/new"
    element={
      <PrivateRoute>
        <NewThread />
      </PrivateRoute>
    }
  />
</Routes>