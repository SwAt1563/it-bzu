import "./Offer_Video.css";

const Offer_Video = (props) => {
  return (
    <>
      <div className="offer_video mt-3 p-5">
        <div className=" row d-flex align-items-center justify-content-center">
          <div className="mb-3 col-lg-6 col-sm-12 ">
            <video
              src={props.video}
              type="video/mp4"
              className="img-fluid"
              id="video_id"
              poster={props.poster}
              controls
            ></video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer_Video;
