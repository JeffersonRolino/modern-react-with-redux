import "bulma/css/bulma.css";

import ProfileCard from "./components/ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

console.log(AlexaImage);
console.log(SiriImage);

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">PDAs</p>
          <p className="subtitle">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aspernatur suscipit facilis cupiditate quo reiciendis labore sit. Est delectus, ratione, ad placeat earum laudantium error possimus deserunt dolores voluptate temporibus."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aspernatur suscipit facilis cupiditate quo reiciendis labore sit. Est delectus, ratione, ad placeat earum laudantium error possimus deserunt dolores voluptate temporibus."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aspernatur suscipit facilis cupiditate quo reiciendis labore sit. Est delectus, ratione, ad placeat earum laudantium error possimus deserunt dolores voluptate temporibus."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
