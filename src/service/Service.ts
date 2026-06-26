import axios from "axios";
//configuração do axios com o backend
const api = axios.create({
    baseURL: 'https://blogpessoal-80zj.onrender.com/'
})

//Solicita uma requisição com o backend
export const cadastrarUsuario = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url,dados) //
    setDados(resposta.data)
}

//recupera as informações que deram certo
export const login = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url,dados)
    setDados(resposta.data)
}
