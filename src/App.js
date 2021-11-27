import "./App.css";
import Profile from "./Component/Profile/Profile";
import image from "./img.jpg";

function App() {
  return (
    <div style={{textAlign: "center"}}>
      <Profile FullName  bio='test blabla' profession='FullStack'>
      {/* <Profile FullName bio profession> */}
      {/* <img src="/img.jpg" alt="" />*/}
      {image}
      </Profile>
    </div> 
  );
}

Profile.defaultProps = {
  FullName: "Rochdi Bouhlel",
  bio : 'blablabalabalablabla',
  profession: 'web developer'
 };

export default App;
