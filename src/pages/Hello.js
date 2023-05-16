import { useNavigate } from "react-router-dom"

export default function Hello() {
  const navigate = useNavigate()
    return (
      <button onClick={()=>{navigate("/")}}>
        I'm a button
      </button>
    );
  }