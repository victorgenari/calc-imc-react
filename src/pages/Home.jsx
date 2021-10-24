// Importando o useState do react
import React, { useState } from 'react'

// Importando os ícones do site React Icons
import { FaRegUser } from 'react-icons/fa'
import { GiBodyHeight } from 'react-icons/gi'
import { GiWeight } from 'react-icons/gi'

// Importando o Styles desta página (Home)
import '../styles/home.scss'

export function Home() {

    // Estados criados para realizar a operação da Calculadora IMC
    const [nome, setNome] = useState(); // Aplicado no input nome (Pegando somente o valor)
    const [altura, setAltura] = useState(); // Aplicado no input altura (Pegando somente o valor)
    const [peso, setPeso] = useState(); // Aplicado no input peso (Pegando somente o valor)
    const [mensagem, setMensagem] = useState(); // Aplicado no background do resultado

    // Função aplicada no botão (Calcular)
    function respostaIMC() {

        // Variáveis criadas dando continuidade na Calculadora IMC

        const calculoIMC = (peso / (altura * altura)) // Fazendo o calculo do peso + altura
        const frase = `${nome}, o valor do seu IMC é: ${calculoIMC.toFixed(1)}` // Frase com o Nome inserido + valores
        setMensagem(frase) // Aplicando a frase e jogando fora da função (Estado Mensagem)

    }

    return (

        <div className="page-background">

            <div className="calc-background">

                <h1>Calcule seu IMC</h1>

                <div className="labels-and-inputs-background">
                    <div className="labels"> <label>Nome:</label> </div>
                    <div className="input-and-icon">
                        <div className="icons"><i><FaRegUser /></i> </div>
                        <div className="inputs"> <input type="text" placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)} /> </div>
                    </div>

                    <div className="labels"> <label>Altura:</label> </div>
                    <div className="input-and-icon">
                        <div className="icons"> <i><GiBodyHeight /></i> </div>
                        <div className="inputs"> <input type="number" placeholder="Digite sua altura" onChange={(e) => setAltura(e.target.value)} /> </div>
                    </div>

                    <div className="labels"> <label>Peso:</label></div>
                    <div className="input-and-icon">
                        <div className="icons"> <i><GiWeight /></i></div>
                        <div className="inputs"> <input type="number" placeholder="Digite seu peso" onChange={(e) => setPeso(e.target.value)} /> </div>
                    </div>
                </div>

                <button type="button" onClick={respostaIMC}>Calcular</button>

                <div className="background-result">{mensagem}</div>

            </div>

            <div className="table-background">

                <table>
                    <thead>
                        <tr>
                            <th>IMC</th>
                            <th>Estado Nutricional</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>&lt; 10</td>
                            <td>Desnutrição Grau V</td>
                        </tr>
                        <tr>
                            <td>de 10 a 12,9</td>
                            <td>Desnutrição Grau IV</td>
                        </tr>
                        <tr>
                            <td>de 13 a 15,9</td>
                            <td>Desnutrição Grau III</td>
                        </tr>
                        <tr>
                            <td>de 16 a 16,9</td>
                            <td>Desnutrição Grau II</td>
                        </tr>
                        <tr>
                            <td>de 17 a 18,4</td>
                            <td>Desnutrição Grau I</td>
                        </tr>
                        <tr>
                            <td>de 18,5 a 24,9</td>
                            <td>Normal</td>
                        </tr>
                        <tr>
                            <td>de 25 a 29,9</td>
                            <td>Pré-obesidade</td>
                        </tr>
                        <tr>
                            <td>de 30 a 34,5</td>
                            <td>Obesidade Grau I</td>
                        </tr>
                        <tr>
                            <td>35 a 39,9</td>
                            <td>Obesidade Grau II</td>
                        </tr>
                        <tr>
                            <td>&gt; 40</td>
                            <td>Obesidade Grau III</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>

    )
}