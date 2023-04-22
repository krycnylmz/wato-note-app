import React, { useEffect, useState } from 'react'
import bg from "../bg.png";
import logo from "../logo_white.png";
import {  useNavigate  } from 'react-router-dom';
import { getUserAsync, userError, isLogedIn } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate  = useNavigate();

  const error = useSelector(userError); // Redux store'dan hata durumunu alıyoruz
  const isUser = useSelector(isLogedIn); 
  const [errorMessage, setErrorMessage] = useState(''); // Hata mesajını yerel state'te tutuyoruz
  

  useEffect(() => {
    // Redux store'dan gelen hata durumunu kontrol edip, hata mesajını ayarlıyoruz
    if (error) {
      setErrorMessage('Giriş başarısız. Lütfen tekrar deneyin.');
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form verilerini topla
    const data = {
      email: email,
      password: password,
    };

    // Kullanıcının giriş yapmasını sağla
    await dispatch(getUserAsync({ data }));

   // Başarılı giriş durumunda yönlendirmeyi gerçekleştir
    // Örneğin, "/dashboard" sayfasına yönlendirelim
  
    navigate('/app');

    // Formu sıfırla
    setEmail('');
    setPassword('');
  };
  return (
      // backgroundImage
      <div
      className="bg-cover bg-center h-screen w-screen pt-8"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-row items-center justify-center h-20 max-w-3xl sm:m-auto mx-4 bg-purple-700 rounded-3xl ">
        <img src={logo} alt="logo" className="h-10 w-auto" />
      </div>
    

    <form onSubmit={handleSubmit} className='max-w-3xl h-72 justify-around rounded-3xl bg-purple-700 flex flex-col p-8 m-auto mt-8'>
      <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='wato@gmail.com' className='rounded-xl  p-3'/>
      <input name='pass' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='********' className='rounded-xl  p-3'/>
      <button type='submit' className=' bg-zinc-100 w-24 p-2 rounded-lg end-0 self-end'> Log me in! </button>
    </form>



      <ul className="w-screen h-28 bottom-0 absolute flex flex-row justify-between p-8 sm:px-32 text-sm sm:text-3xl list-disc text-purple-100">
        <li>Free</li>
        <li>Easy to Use</li>
        <li>Fun</li>
        <li>Responsive Design</li>
        
      </ul>
    </div>
  )
}

export default LoginPage