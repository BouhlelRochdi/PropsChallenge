import "./App.css";
import Profile from "./Component/Profile/Profile";
import image from "./img.jpg";

function App() {
  return (
    <div style={{textAlign: "center"}}>
      <Profile FullName="Rochdi Bouhlel"  bio='test blabla' profession='FullStack'>
      {image}
      </Profile>
    </div> 
  );
}



export default App;
