import "./home_screen.css"

export default function Home_Screen() {

  

    return (
      <div id="mainContainer">
        <div id="sidebarContainer">
          <div className="logoContainer">
            <div id="logo">
              <div id="logoHider"></div>
            </div>
          </div>
        </div>
        <div className="nameButtonContainer">
          <section className="searchGroup">
            <select id="regionSelect" placeholder="Region">
              <option selected disabled hidden>Region:</option>
              <option>EUNE</option>
              <option>EUW</option>
              <option>Korea</option>
              <option>NA</option>
            </select>
            <input placeholder="Search..." id="searchBar"/>
          </section>
          <section className="buttonGroup1">
            <button>SheCho</button>
            <button>Jeno</button>
            <button>Urgood</button>
            <button>tahm kench</button>
          </section>
          <section className="buttonGroup2">
            <button>SingedOff</button>
            <button>Iamdilfa</button>
            <button>Harisa</button>
            <button>Abbystein</button>
          </section>
        </div>
        <div id="animatedBackground"></div>
      </div>
    );
  }
  
  