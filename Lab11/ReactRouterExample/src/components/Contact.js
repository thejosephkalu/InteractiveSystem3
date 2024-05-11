import { Navigate, useNavigate } from "react-router-dom";
export const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = () =>{
    console.log("We Click a")
    navigate("/")
  }
  return (
    <>
    <div>Contact</div>
    <button onClick={handleSubmit}> Back to Home</button>
    </>
  )
}
