import { Login, Navbar } from './components'
import { Routes, Route } from 'react-router-dom'
import { AdminPanel, CourseDetails, CourseManagement, UserManagement, Profile, NotFound, Home, Dashboard } from './views'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import axios from './apis/axios.js'
import { useState } from 'react'


function App() {
  const { user:{ currentlyLoggedRole } } = useSelector((state) => state.user);
  const [roles, setRoles] = useState([]);


  
  useEffect(() => {
    console.log(currentlyLoggedRole)
    async function fetchRoles(){
      const { data } = await axios.get('/api/roles');
      console.log(data);
      
    }
    fetchRoles();
  }, []);


  return (
    <>
   <div className="min-h-screen bg-gradient-to-b from-space-900 to-space-100">
      <div className="container mx-auto p-4">
        {/* Your page content here */}
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="courses/:id" element={<CourseDetails />} />
            <Route path="login" element={<Login />} />
          </Route>          


          {/* Private Routes */}

        </Routes>
      </div>
    </div>
    
    </>
  )
}

export default App
