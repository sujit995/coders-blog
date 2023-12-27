import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logouthandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    } 
  return (
    <button onClick={logouthandler} className='inline-block px-6 py-2 duration-200 hover:bg-red-500 rounded-full'>LogoutBtn</button>
  )
}

export default LogoutBtn