import React, {useState,  useEffect } from "react";
import {api} from "../../configApi.js";
import ButtonForm from "../../components/ButtonForm.jsx";
import InputField from "../../components/InputField.jsx";
import axios from "axios";


async function loginUser(credentials){
    try{
        return await axios.post(api.url + "/login", credentials, {
            timeout: 2000,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
        })
        .then(({data}) => {
            return data;
        })
    }
    catch(err){
        alert("temps de requête dépassé.");
    }
    
}

function LoginPage({changeSetRole,setToken}){
    
    const [email,setUserEmail] = useState(null)
    const [password,setUserPassword] = useState(null)
    function handleEmailChange(event){
        const emailContainer = document.getElementById("inputField-email");
        setUserEmail(emailContainer.value);
    }
    function handlePasswordChange(event){
        const passwordContainer = document.getElementById("inputField-password");
        setUserPassword(passwordContainer.value);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        
        const response = await loginUser({
            email: email,
            password: password
        })
        //When we receive the response
        if(response){
            if(response.message === "Your credentials are correct"){
                setToken(response.token);
                changeSetRole(response.role);
                window.location.reload();
            }
            else{
                alert("Mauvais identifiants")
            }
        }
        else{
            alert("Erreur interne");
        }
    }
    
    return(
        <div id="login-container">
            <h1>Page de connexion</h1>
        </div>
    )
}

export default LoginPage;