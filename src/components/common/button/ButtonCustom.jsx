import "./button.css";

const ButtonCustom = ({ text, light = false }) => {
  return (
    <div className={`button-container ${light ? "light" : ""}`}>
      <button>{text}</button>
    </div>
  );
};

export default ButtonCustom;
