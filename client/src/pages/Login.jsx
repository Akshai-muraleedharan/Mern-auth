import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'


function Login() {

  const[formData,setFormData] =useState({})
  const[error,setError] =useState(false)
  const[loading,setLoading] =useState(false)
  const navigate = useNavigate()

  const handleChange = (e)=> {
         setFormData({...formData, [e.target.id] : e.target.value})
  }

 const handleSubmit =async (e) => {
  e.preventDefault()


  try {
    setLoading(true)
    setError(false)
    const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
    })
    const data = await res.json();
    console.log(data);
    setLoading(false)
    if(data.success === false){
    setError(true)
    return ;
    }
    navigate('/')
} catch (error) {
    setLoading(false)
    setError(true)
}

 }


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>

      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
       

        <input type="email" placeholder='email' id='email'className='bg-slate-200 p-3 rounded-lg' 
        onChange={handleChange}  />

        <input type="password" placeholder='password' id='password' className='bg-slate-200 p-3 rounded-lg' 
        onChange={handleChange} />

        <button disabled={loading}  className='bg-slate-700 text-white p-3 rounded-lg uppercase disabled:opacity-95 hover:opacity-80'>
         {loading ? "loading..." : "sign in"}
          </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont Have an Account ?</p>
        <Link to={'/signup'}>
        <span className='text-blue-500'>Sign up</span>
        </Link>
      </div> 
      <p className='text-red-500 mt-5'>
        {error && "Somthing went wrong"}
        </p>

    </div>
  )
}

export default Login;