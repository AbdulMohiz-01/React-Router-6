import { Link } from 'react-router-dom';
import axios from '../apis/axios.js';
import {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/userSlice.js';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newuser, setNewUser] = useState({
    username: '',
    password: '',
  });

  const loginTheUser = async (e) => {
      e.preventDefault();
      const {data} = await axios.get('/api/users');
      console.log(data);
      const user = data.filter((user) => newuser.username === user.username && newuser.password === user.password);
      // console.log(user[0])
      dispatch(login(user[0]));
      navigate('/');
  };


  return (
    <div className="min-h-min mt-32 flex flex-col justify-center items-center">
      <div className="max-w-md w-full mx-auto p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">Login</h2>
        <form onSubmit={(e) => {
          loginTheUser(e);
        }} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-white">Username</label>
            <input
              type="text"
              value={newuser.username}
              onChange={(e) => setNewUser({ ...newuser, username: e.target.value })}
              className="w-full bg-gray-700 rounded px-3 py-2 text-white"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-white">Password</label>
            <input
              type="password"
              value={newuser.password}
              onChange={(e) => setNewUser({ ...newuser, password: e.target.value })}
              className="w-full bg-gray-700 rounded px-3 py-2 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded py-2"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-gray-300">
         {` Don't have an account?`}{' '}
          <Link to="/signup" className="text-purple-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
