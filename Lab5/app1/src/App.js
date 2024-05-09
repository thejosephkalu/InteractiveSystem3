import logo from './logo.svg';
import About from './About';
import './App.css';
function Testing()
{
  return (
    <button>Click Here</button>
  );
}

function SignUp() {
  return (
    <button>Sign Up</button>
  )
}

function LogIn()
{
  return (
    <button>Log In</button>
  );
}

let isNewUser = true;
/*
let content;
if(isNewUser)
{
  content = <SignUp/>;
}
else 
{
  content = <LogIn/>;
}
*/
function App() {
  return (
    <div>
    <h1>Hello to my first app</h1>
    <p>This is a test paragraph</p>
    <Testing/>
    <About/>
    {isNewUser? <SignUp/>: <LogIn/>}
    </div>
  );
}

export default App;
