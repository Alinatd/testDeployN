import React, { useEffect, useState } from 'react'
import css from './Login.module.css'
import bgLogin from './bgLogin.png'
import { Link } from 'react-router-dom'
import {EyeOutlined,EyeInvisibleOutlined} from '@ant-design/icons'



export const Login = () => {
    const [password,setPassword] = useState("")
    const [visible,setVisible] = useState(true)
    const [articles,setArticles] = useState([])


  return (
    <div>

   
    <div className={css.container} >
        <img src={bgLogin} alt="" />
        <div className={css.login}>
        <input type="text" placeholder='Имя пользователя' />
        <input
         value={password}
          placeholder='Пароль' 
         id="Пароль"
         onChange={(e)=>setPassword(e.target.value)}
         type={visible ? "text" : "password"}></input>
         <div className={css.eye} onClick={()=>setVisible(!visible)}>
            {
visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
            }
         </div>
         

        <p>Забыли пароль</p>

        <button className={css.btn1}>Войти</button>

        <button className={css.btn2} >Зарегистрироваться</button>
    
        </div>
    </div>
    </div>
  )
}