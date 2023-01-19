import "./Offer_Video.css";

const Offer_Video = (props) => {
  return (
    <>
      <div className="video mt-3 p-5">
        <div className=" row ">
          <div className="part mb-3 col-lg-6 col-sm-12 d-flex align-items-center justify-content-center">
            <video className="" id="video_id" poster={props.poster}>
              <source src={props.video} type="video/mp4" />
            </video>

          </div>
        </div>
      </div>
    </>
  );
};

export default Offer_Video;
