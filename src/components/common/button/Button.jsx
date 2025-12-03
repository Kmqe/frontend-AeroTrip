import "./button.css";

const Button = ({ text, light = false }) => {
  return (
    <div className={`button-container ${light ? "light" : ""}`}>
      <button>{text}</button>
    </div>
  );
};

export default Button;
