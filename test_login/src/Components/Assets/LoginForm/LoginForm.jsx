import React from "react";
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";



const LoginForm = () => {

    return (
        <div className="conteudo">
            <form action="">
            <h1>Login</h1>

            <div className="input-box">
                <input type="text" placeholder="Username" required />
                <FaUser className='icon'/>
            </div>

            <div className="input-box">
                <input type="password" placeholder="Password" required />
                <FaLock className='icon'/>
            </div>

            <div className="recuperar">
                <label> <input type="checkbox" /> Remeber me </label>
                <a href="#"> Forgot password?</a>
            </div>

                <button className="btn" type="submit">Login</button>

                <div className="link-registro">
                    <p>Nao tem uma conta ?  <a href="#">Registre-se</a></p>
                </div>

            </form>
        </div>
    );
};

export default LoginForm; 