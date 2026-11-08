import "./TechIcon.css";

function TechIcon({ icon: Icon, name }) {
  if (!Icon) {
    return (
      <div className="tech-icon-area">
        <p className="tech-name-no-icon">{name}</p>
      </div>
    );
  }

  return (
    <div className="tech-icon-area">
      {Icon && <Icon className="tech-icon" />}
      <p className="tech-name">{name}</p>
    </div>
  );
}

export default TechIcon;
