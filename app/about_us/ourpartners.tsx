import styles from "./AboutUsPage.module.css";
import Image from "next/image";

const partners = [
  {
    id: 1,
    image: "/business_partners/amazon_logo.png",
  },
  {
    id: 2,
    image: "/business_partners/CBC_Logo_White.png",
  },

  {
    id: 3,
    image: "/business_partners/nyu-logo.png",
  },
  {
    id: 4,
    image: "/business_partners/QueensLogo_white.png",
  },
  {
    id: 5,
    image: "/business_partners/samsung-logo.png",
  },
  {
    id: 6,
    image: "/business_partners/sodexo-logo.png",
  },
];

const OurPartners = () => {
  return (
    <section>
      <p>
        We collaborate with some of the most respected names in the space and
        technology industries to make every journey extraordinary.
      </p>
      <div className={styles.partnersGrid}>
        {partners.map((partner) => (
          <Image
            key={partner.id}
            src={partner.image}
            alt={`Partner ${partner.id}`}
            className={styles.partnerLogo}
            width={150}
            height={70}
          />
        ))}
      </div>
    </section>
  );
};

export default OurPartners;
