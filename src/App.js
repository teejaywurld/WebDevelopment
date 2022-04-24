import Logo from "./components/Logo";
import "./App.css"
import AuthButton from "./components/AuthButton";

function App() {

    const links = [
        {
            reviewsName: 'Reviews',
        },
        {
            tipsName: 'Tips',
        },
        {
            alertsName: 'Alerts',
        },
        {
            blogsName: 'Blogs',
        },
    ]

  return (
    <div className="app-container">
      <div className="header-container">
          <div className="header">
            <Logo />
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: "center", width: '20%', color: "white", marginLeft: "30em"}}>
                  {links.map((link) => <p>{link.buttonName}</p>)}
                  {links.map((link) => <p>{link.tipsName}</p>)}
                  {links.map((link) => <p>{link.alertsName}</p>)}
                  {links.map((link) => <p>{link.blogsName}</p>)}
              </div>
              <div className="sign-container">
                   <AuthButton/>
              </div>
          </div>
          <div className="discover">
              <h1>Discover a Beautiful Place<br/>with us</h1>
              <p>Would you explore nature
                  let's find the <br/>
                  best destination in the world with us paradise in the world</p>
          </div>
      </div>

    </div>
  );
}

export default App;
