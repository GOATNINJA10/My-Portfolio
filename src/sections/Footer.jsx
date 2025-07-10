import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a 
              key={index} 
              href={socialImg.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="icon hover:opacity-80 transition-opacity"
            >
              <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} className="w-8 h-8" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            &copy; {new Date().getFullYear()} Kshitij Bramhecha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;