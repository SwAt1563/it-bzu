import "./Sales.css";
import { default as offers } from "../../Data/offers";
import { Offer } from "../../Components/index";
const Team = () => {
  const sales = offers.map((offer, index) => {
    return (
      <Offer
        
        index={index}
        key={offer.id}
        name={offer.name}
        logo={offer.logo}
        date_from={offer.date_from}
        date_to={offer.date_to}
        descripition={offer.descripition}
        face={offer.face}
        inst={offer?.inst}
        number={offer.number}
        position={offer.position}
        time={offer.time}
        offers={offer.offers}
        imgs={offer?.imgs}
        video={offer?.video}
        poster={offer?.poster}
        
      />
    );
  });

  return (
    <>
      <div className="sales p-5">
        <div className="container">
          <h2 className="title text-center mb-5">العروضات والخصومات </h2>
          <hr className="mb-5" />
          <div className="members">{sales}</div>
        </div>
      </div>
    </>
  );
};

export default Team;
