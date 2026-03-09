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
                {"MONCY".split("").map((c, i) => <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>{c}</span>)}
              </div>
              <br />
              <div className="floating-word">
                {"YOHANNAN".split("").map((c, i) => <span key={i} style={{ animationDelay: `${(i + 5) * 0.1}s` }}>{c}</span>)}
              </div>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Creative</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Designer</div>
              <div className="landing-h2-2">Developer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Developer</div>
              <div className="landing-h2-info-1">Designer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
