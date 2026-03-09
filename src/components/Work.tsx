import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "JAMANGO",
    category: "Full-Stack Ecommerce Platform",
    tools: "React, Node.js, Express.js, MySQL, AWS S3, AWS EC2, Docker",
    image: "/images/placeholder.webp"
  },
  {
    name: "AWS Enterprise Open-Source Deployment",
    category: "DevOps · Cloud Infrastructure · AWS",
    tools: "AWS VPC, EC2, Docker, Seafile, Redmine, Zimbra, SSL, Nginx",
    image: "/images/placeholder.webp"
  },
  {
    name: "OrangeHRM — HRMS Deployment",
    category: "DevOps · Human Resource System · AWS",
    tools: "AWS EC2, VPC, Docker, MySQL, RBAC, SSL",
    image: "/images/placeholder.webp"
  },
  {
    name: "Prassanna Fashion Designs",
    category: "Frontend · React · Tailwind · Education Branding",
    tools: "React, Tailwind CSS, Vite",
    image: "/images/placeholder.webp"
  },
  {
    name: "Stackly OS",
    category: "Frontend · Internal Portal · Company UI",
    tools: "React, Vite, Tailwind CSS",
    image: "/images/placeholder.webp"
  }
];

const Work = () => {
  useGSAP(() => {
    function getScrollAmount() {
      const box = document.getElementsByClassName("work-box");
      if (!box || !box[0]) return 0;
      const workContainer = document.querySelector(".work-container");
      if (!workContainer) return 0;
      const rectLeft = workContainer.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number = parseInt(window.getComputedStyle(box[0]).padding) / 2 || 0;
      return rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getScrollAmount()}`, // Dynamically calculate it!
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true, // Recalculate sizes on screen resize
      },
    });

    timeline.to(".work-flex", {
      x: () => -getScrollAmount(),
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
