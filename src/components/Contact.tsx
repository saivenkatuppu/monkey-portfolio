import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".contact-box > *");
    elements.forEach((el: any) => {
      gsap.from(el, {
        x: () => gsap.utils.random(-150, 150),
        y: () => gsap.utils.random(-150, 150),
        rotation: () => gsap.utils.random(-45, 45),
        opacity: 0,
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-container",
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });
    });

    gsap.from(".contact-container h3", {
      y: -100,
      opacity: 0,
      duration: 1.5,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: ".contact-container",
        start: "top 75%"
      }
    });
  }, []);

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:saivenkatuppu46@gmail.com" data-cursor="disable">
                saivenkatuppu46@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+917013666069" data-cursor="disable">
                +91 70136 66069
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/saivenkatuppu"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/saivenkat-uppu"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Sai Venkat Uppu</span>
            </h2>
            <h5>
              <MdCopyright /> 2024
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
