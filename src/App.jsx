import { Navigate } from 'react-router-dom';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const navigateTo = (path) => {
    return <Navigate to={path} />
  }

  const create = ()=> {
    localStorage.setItem('token', '')
    window.location.reload()
  }

  useEffect(()=> {
    const user = localStorage.getItem('user');
    const userdata = JSON.parse(user);
    setData(userdata)
  }, [])
  // localStorage.setItem('token', '' )
  const istoken = localStorage.getItem('token');
  return (
    <>
      {istoken === 'true' ? (
        <>
          <header className='bg-sky-900'>
            <div className="border-b-2 w-[100%] bg-sky-700">
              <div className="container flex w-[1280px] justify-between pl-[20px] pr-[20px] items-center h-[100px]">
                <h1 className='text-[28px] cursor-pointer font-bold'>FIREBASE</h1>
                <ul className='flex gap-[30px]'>
                  <li className='cursor-pointer hover:text-gray-400'>Home</li>
                  <li className='cursor-pointer hover:text-gray-400'>About</li>
                  <li className='cursor-pointer hover:text-gray-400'>Contact</li>
                  <li onClick={create} className='cursor-pointer text-gray-200 hover:text-gray-400'>Create account</li>
                </ul>
                <div className="flex justify-center items-center gap-[20px] rounded-[12px]">
                  {/* <h1 className='text-[20px] text-red-500 bg-slate-100'>{data.email}</h1> */}
                  <button className='h-[60px] bg-[#fff] rounded-[100%] flex items-center justify-center'><img className='w-[25px] h-[25px] rounded-[50%]' src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="" /></button>
                </div>
              </div>
            </div>
            <div className="h-[90vh] max-w-[1280px] justify-between m-auto bg-sky-900">
              <div className="flex justify-between h-[100px] border-b-2 pl-[20px] pr-[20px] bg-sky-900 items-center">
                <h1 className='text-[30px] text-sky-300'>CARDS</h1>
                <button className='bg-[#fff]'>add cards</button>
              </div>
              <h1 className='flex justify-center text-center'>No Cards</h1>
            </div>
          </header>
        </>
      ) : (
        <>
          {navigateTo('/signup')}
          <h1>hello</h1>
        </>
      )}
    </>
  )
}

export default App
