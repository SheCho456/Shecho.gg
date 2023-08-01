import "./home_screen.css"

export default function Home_Screen() {

  

    return (
      <div id="mainContainer">
        <section id="sidebarContainer">
          <div className="logo" />
        </section>
        <div className="nameButtonContainer">
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
  
  