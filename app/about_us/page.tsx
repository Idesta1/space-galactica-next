import OurValues from "./ourvalues";
import OurCrew from "./ourcrew";
import OurPartners from "./ourpartners";
import styles from "./AboutUsPage.module.css";

export const Crew = () => {
  return (
    <div className={`${styles.app} fullBGpicture`}>
      <main className="mainContent">
        <h1>About us</h1>
        <section className="card">
          <h2>Our Values</h2>
          <OurValues />
        </section>
        <section className="card">
          <h2>The Crew</h2>
          <OurCrew />
        </section>
        <section className="card">
          <h2>Our Partners</h2>
          <OurPartners />
        </section>
      </main>
    </div>
  );
};

export default Crew;
