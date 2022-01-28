import React, {useState} from "react";
import "./esquecisenha.css";
import imagemFundo from "../../images/martelin.png";
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import * as managerService from '../../services/manager/managerService';
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

toast.configure()
function EsqueciSenha(){
  const [email, setEmail] = useState('');
  const { addToast } = useToasts();
  const history = useHistory();
  function confirmarEmail(e) {
    setEmail(e.target.value);
  }
  const sendEmail = {
    email,
  };
  const JSONtoSend = JSON.stringify(sendEmail);
  const handleClick = async (e) => {
    try {
      e.preventDefault();
      await managerService.sendResetEmail(JSONtoSend);
      history.push('/login');
      toast.success('Email enviado com sucesso!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000
    })
    } catch {
      toast.error('Email não cadastrado!!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000
    })
    }
  };
    return (
        <div className="container-forgot-password" style={{backgroundImage:`url(${imagemFundo})`, backgroundSize:'cover', width:'100vw', height:'100vh'}}>
           <div className="campo-forgot-password">
             <div className="box-forgot-password">
              <div className="voltar-forgot-password">
                <a href="/login">
                  <span></span>Login    
                </a>
              </div>
               <div className="text-forgot-password">
                  <img src="images/logoSemFundo.png" alt="Logo" />
                  <h1> Redefinir Senha</h1>
                  <h2> Informe seu email cadastrado no REJUFE</h2>
                <input 
                type="text" 
                name="email" 
                onChange={(e) => confirmarEmail(e)}
                >
                </input>
                <button type="submit" onClick={handleClick}>Redefinir Senha</button>
                </div>
              </div>
           </div>
        </div>
    )
}

export default EsqueciSenha;