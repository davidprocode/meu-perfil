import { auth } from "../utils/gotrue";
import { useState } from "react"

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(event){
    event.preventDefault();
    auth.signup(email, password)
    .then(response => console.log("Success!Check your inbox! ", response))
    .catch(error => console.log("It 's an error", error));
  }
    return (
      <div>
        <h1>This is the Register Page</h1>
        <form onSubmit={event => handleSubmit(event)}>
          E-mail: <input type="email" name="email" onChange={event => setEmail(event.target.value)} /><br />
          Senha: <input type="password" name="senha" onChange={event => setPassword(event.target.value)} /><br />
          <input type="submit" value="Registrar" />
        </form>
      </div>
    );
  }