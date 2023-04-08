import { Routes, Route } from 'react-router-dom';
import "./Profile.css"

function Profile() {

    return(
<>

    <form className='form' action='' method='POST' style={{textAlign: 'center'}}>
    <h1 style={{textAlign: "center"}}>Регистрация</h1>
  
  <input className='form__input' type='text' placeholder='Ваше имя' required></input>
  <input className='form__input' type='email' placeholder='Ваш email' required></input>
  <input className='form__input' type='password' placeholder='Пароль (минимум 7 символов)' pattern=".{7,}" required></input>
  
  <input className='form__submit' type='submit' value='Зарегистрироваться'></input>
  </form>
   


</>
    )
}
export default Profile;