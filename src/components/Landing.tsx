import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1 className="floating-name">
              <div className="floating-word">
                {"SAIVENKAT".split("").map((c, i) => <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>{c}</span>)}
              </div>
              <br />
              <div className="floating-word">
                {"UPPU".split("").map((c, i) => <span key={i} style={{ animationDelay: `${(i + 9) * 0.1}s` }}>{c}</span>)}
              </div>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Full-Stack</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Engineer</div>
              <div className="landing-h2-2">DevOps</div>
            </h2>
            <h2>
              <div className="landing-h2-info">DevOps</div>
              <div className="landing-h2-info-1">Engineer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
