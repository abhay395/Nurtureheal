import { useLocation } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import RootLayout from './RootLayout'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import PageNotFound from './pages/PageNotFound'
import ProtectedRoute from './componente/ProtectedRoute'


function App() {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile" element={<ProtectedRoute allowedRole={['user', 'admin', 'superadmin']} ><Profile /></ProtectedRoute>} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  )
}
