import { useDispatch } from 'react-redux';
import { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';
import { addTodo } from '../state/todoSlice';
import { Navigate } from 'react-router-dom';

function SignUp() {
  const [users, setUsers] = useState({
    email: '',
    password: '',
  })
  const [ifs, setifs] = useState('false')
  const dispatch = useDispatch()

  const hendlesubmit = (e)=> {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, users.email, users.password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    localStorage.setItem('user', JSON.stringify(user))
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  dispatch(addTodo({
    email: users.email,
    password: users.password,
  }))
  const local = localStorage.getItem('user');
  localStorage.setItem('token', 'true');
  const ifs = localStorage.getItem('token')
  setifs(ifs)
  }
  return (
    <>{ifs == 'true' ? <Navigate to={'/'}/> : 
      <div className="w-[400px] flex justify-center items-center h-[400px] bg-teal-400 rounded-[12px]">
        <form onSubmit={hendlesubmit} className='w-[300px] h-[300px] flex flex-col'>
          <label className='text-start text-[20px] text-blue-800'>Email</label>
          <input value={users.email} onChange={(e)=> setUsers((pref)=> ({...pref, email: e.target.value}))} className='h-[50px] border-[2px] border-gray-600 rounded-[8px]' type="email" required/>
          <label className='text-start text-[20px] text-blue-800'>Password</label>
          <input value={users.password} onChange={(e)=> setUsers((pref)=> ({...pref, password: e.target.value}))} className='h-[50px] border-[2px] border-gray-600 rounded-[8px]' type="password" required/>
          <button className='mt-[60px] border-[2px] border-gray-600' type='submit'>Submit</button>
        </form>
      </div>}
    </>
  )
}

export default SignUp