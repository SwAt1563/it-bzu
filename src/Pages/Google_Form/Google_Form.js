import "./Google_Form.css";

const Google_Form = (props) => {
  return (
    <>
      <>
        <div className="google-form p-5">
          <div className="container text-center">
            <iframe
              scrolling="no"
              src={props.src}
              width="640"
              height="2000"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              جارٍ التحميل…
            </iframe>
          </div>
        </div>
      </>
    </>
  );
};

export default Google_Form;
