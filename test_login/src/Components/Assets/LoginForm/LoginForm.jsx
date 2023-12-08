import React from "react";
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";


const estBr = [
    { sigla: 'AC', nome: 'Acre' },
    { sigla: 'AL', nome: 'Alagoas' },
    { sigla: 'AP', nome: 'Amapá' },
    { sigla: 'AM', nome: 'Amazonas' },
    { sigla: 'BA', nome: 'Bahia' },
    { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' },
    { sigla: 'ES', nome: 'Espírito Santo' },
    { sigla: 'GO', nome: 'Goiás' },
    { sigla: 'MA', nome: 'Maranhão' },
    { sigla: 'MT', nome: 'Mato Grosso' },
    { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MG', nome: 'Minas Gerais' },
    { sigla: 'PA', nome: 'Pará' },
    { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PR', nome: 'Paraná' },
    { sigla: 'PE', nome: 'Pernambuco' },
    { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' },
    { sigla: 'RN', nome: 'Rio Grande do Norte' },
    { sigla: 'RS', nome: 'Rio Grande do Sul' },
    { sigla: 'RO', nome: 'Rondônia' },
    { sigla: 'RR', nome: 'Roraima' },
    { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SP', nome: 'São Paulo' },
    { sigla: 'SE', nome: 'Sergipe' },
    { sigla: 'TO', nome: 'Tocantins' },
];


const LoginForm = () => {

    return (

        <div className="main">



            <div className="inputs">


                <div className="input_1">
            <div className="select">
                <label htmlFor="estados">Selecione um estado:</label>
                <select id="estados" name="estados">
                    {estBr.map((estado) => (
                        <option key={estado.sigla} value={estado.sigla}>
                            {estado.nome}
                        </option>
                    ))}
                </select>
            </div>
                    <input className="inp"  type="text" placeholder="nome" />
                    <input className="inp"  type="date" placeholder="Data Nascimento" />
                    <input className="inp"  type="text" placeholder="Celular" />
                    <input className="inp"  type="text" placeholder="Endereço" />
                </div>

                <div className="input_2">

                    <input className="inp1"  type="email" placeholder="E-mail" />
                    <input className="inp"  type="text" placeholder="Naturalidade" />
                    <input className="inp"  type="tell" placeholder="Celular" />
                    <input className="inp"  type="text" placeholder="Endereço" />
                </div>

            </div>
        </div>
    );
};

export default LoginForm; 