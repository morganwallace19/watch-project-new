import React from "react"
import './footer.css'
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerWrap">
        <div className="footerLinksContainer">
          <div className="footerLinksWrapper">
            <div className="footerLinkItems">
              <div className="footerLinkTitle"><h1>About Us</h1></div>
              <div className="footerLink">How it works</div>
              <div className="footerLink">Testimonials</div>
              <div className="footerLink">Careers</div>
              <div className="footerLink">Investors</div>
              <div className="footerLink">Terms of Service</div>
            </div>

            <div className="footerLinkItems">
              <div className="footerLinkTitle"><h1>Contact Us</h1></div>
              <div className="footerLink">Contact</div>
              <div className="footerLink">Support</div>
              <div className="footerLink">Destinations</div>
              <div className="footerLink">Sponsorship</div>
            </div>
          </div>

          <div className="footerLinksWrapper">
            <div className="footerLinkItems">
              <div className="footerLinkTitle"><h1>Videos</h1></div>
              <div className="footerLink">Submit Videos</div>
              <div className="footerLink">Ambassadors</div>
              <div className="footerLink">Agency</div>
              <div className="footerLink">Influencer</div>
            </div>

            <div className="footerLinkItems">
              <div className="footerLinkTitle"><h1>Business</h1></div>
              <div className="footerLink">Instagram</div>
              <div className="footerLink">Facebook</div>
              <div className="footerLink">YouTube</div>
              <div className="footerLink">Twitter</div>
            </div>
          </div>
        </div>

        <div className="socialMedia">
          <div className="socialMediaWrap">
            <div className="socialLogo">Watches
            </div>
            <div className="websiteRights">Watches &copy; 2023 All Rights Reserved</div>
            <div className="socialIcons">
              <div className="socialIconLink"><a href="/" target="_blank" aria-label="Facebook">
                <FaFacebook /></a>
                </div>
                <div className="socialIconLink"><a href="/" target="_blank" aria-label="Instagram">
                <FaInstagram /></a>
                </div>
                <div className="socialIconLink"><a href="/" target="_blank" aria-label="YouTube">
                <FaYoutube /></a>
                </div>
                <div className="socialIconLink"><a href="/" target="_blank" aria-label="Twitter">
                <FaXTwitter /></a>
                </div>
                <div className="socialIconLink"><a href="/" target="_blank" aria-label="Pinterest">
                <FaPinterest /></a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    //   <FooterWrap>
    //     <footerLinksContainer>
    //       <FooterLinksWrapper>
    //         <FooterLinkItems>
    //           <FooterLinkTitle>About Us</FooterLinkTitle>
    //             <FooterLink>How it works</FooterLink>
    //             <FooterLink>Testimonials</FooterLink>
    //             <FooterLink>Careers</FooterLink>
    //             <FooterLink>Investors</FooterLink>
    //             <FooterLink>Terms of Service</FooterLink>
    //         </FooterLinkItems>

    //         <FooterLinkItems>
    //           <FooterLinkTitle>About Us</FooterLinkTitle>
    //             <FooterLink>How it works</FooterLink>
    //             <FooterLink>Testimonials</FooterLink>
    //             <FooterLink>Careers</FooterLink>
    //             <FooterLink>Investors</FooterLink>
    //             <FooterLink>Terms of Service</FooterLink>
    //         </FooterLinkItems>
    //       </FooterLinksWrapper>

    //       <FooterLinksWrapper>
    //         <FooterLinkItems>
    //           <FooterLinkTitle>About Us</FooterLinkTitle>
    //             <FooterLink>How it works</FooterLink>
    //             <FooterLink>Testimonials</FooterLink>
    //             <FooterLink>Careers</FooterLink>
    //             <FooterLink>Investors</FooterLink>
    //             <FooterLink>Terms of Service</FooterLink>
    //         </FooterLinkItems>

    //         <FooterLinkItems>
    //           <FooterLinkTitle>About Us</FooterLinkTitle>
    //             <FooterLink>How it works</FooterLink>
    //             <FooterLink>Testimonials</FooterLink>
    //             <FooterLink>Careers</FooterLink>
    //             <FooterLink>Investors</FooterLink>
    //             <FooterLink>Terms of Service</FooterLink>
    //         </FooterLinkItems>
    //       </FooterLinksWrapper>
    //     </footerLinksContainer>
    //   </FooterWrap>
    // </FooterContainer>
  )
}

export default Footer;