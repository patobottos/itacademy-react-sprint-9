import "./NimHistory.styles.css";

const MarienbadVideo = () => {
  return (
    <div className="popup-video">
      <iframe 
        src="https://www.youtube.com/embed/-aPDfqYrIcg?autoplay=1&mute=1"
        frameborder="0"
        allow="accelerometer; encrypted-media; gyroscope;"
        allowfullscreen
      ></iframe>
      <p className="video-footer">
        Extract of the film: <span className="italics">"L'année dernière à Marienbad"</span>, by Alain Resnais,
        1961.
      </p>
    </div>
  );
};
export default MarienbadVideo;
