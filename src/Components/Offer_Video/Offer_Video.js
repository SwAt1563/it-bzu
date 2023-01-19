import "./Offer_Video.css";

const Offer_Video = (props) => {
  return (
    <>
      <div className="offer_video mt-3 p-5">
        <div className=" row d-flex align-items-center justify-content-center">
          <div className="mb-3 col-lg-6 col-sm-12 ">
            {/* <video
              src={props.video}
              type="video/mp4"
              className="img-fluid"
              id="video_id"
              poster={props.poster}
              controls
            ></video> */}

            <iframe
              className="video"
              src={props.video_iframe_source}
              width="560"
              height="233"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen="true"
              title="offer"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer_Video;
