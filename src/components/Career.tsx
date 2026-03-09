import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5 className="gradient-text">Venturemond</h5>
              </div>
              <h3 className="gradient-text">2025 - NOW</h3>
            </div>
            <p>
              Working as a Full-Stack and DevOps Engineer at Venturemond, building and deploying scalable web applications, designing enterprise infrastructure on AWS, and integrating robust CI/CD pipelines to streamline deployment lifecycles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer & DevOps Engineer</h4>
                <h5 className="gradient-text">CODE FROM SAI / Freelance</h5>
              </div>
              <h3 className="gradient-text">2023 - 2025</h3>
            </div>
            <p>
              Designed and deployed multiple full-stack applications including JAMANGO — a complete ecommerce platform for fresh mango delivery. Deployed enterprise open-source platforms (Seafile, OrangeHRM, Redmine, OpenProject, Zimbra) on AWS infrastructure using Docker, VPC, and cloud services.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5 className="gradient-text">UI Projects (Fashion, SaaS, Fintech)</h5>
              </div>
              <h3 className="gradient-text">2022 - 2023</h3>
            </div>
            <p>
              Built and handed over 12+ frontend UI projects spanning fashion, real estate, banking, travel, food delivery, admin dashboards, and portfolio templates. Delivered responsive, production-ready React and Next.js interfaces with Tailwind CSS.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Student</h4>
                <h5 className="gradient-text">Computer Science, Hyderabad, India</h5>
              </div>
              <h3 className="gradient-text">2020 - 2022</h3>
            </div>
            <p>
              Built foundational skills in JavaScript, React, Node.js, and database design. Started building personal and freelance projects with a focus on full-stack architecture and cloud deployment from an early stage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
