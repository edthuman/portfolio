import "./TechIcon.css";
import TechName from "./TechName/TechName";

function TechIcon({ icon: Icon, name }) {
  if (!Icon) {
    return (
      <div className="tech-icon-area">
        <TechName name={name} className="tech-name-no-icon" />
      </div>
    );
  }

  return (
    <div className="tech-icon-area">
      <Icon className="tech-icon" />
      <TechName name={name} className="tech-name" />
    </div>
  );
}

export default TechIcon;
