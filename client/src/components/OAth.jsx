import  {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import app from '../../firebase'


function OAth() {
   const handleGoogleClick = async () => {

    try {
        const provider = new GoogleAuthProvider()
        const auth = getAuth(app) 

        const result = await signInWithPopup (auth,provider)
        console.log(result)
    } catch (error) {
      console.log('could not login with error',error);   
    }
   }
  return (
   <>
   <button type='button' onClick={handleGoogleClick} className='bg-red-700 rounded-lg p-3 text-white uppercase hover:opacity-95' >continue with google</button>
   </>
  )
}

export default OAth