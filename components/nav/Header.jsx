import {Link, animateScroll} from "react-scroll"
function Header() {
  return (
    <nav className="nav">
      <div>
        <h1>North Sydney Painting and Decorating</h1>
      </div>
      <ul>
        <li>
          <Link onClick={() => animateScroll.scrollToTop()}>Home</Link>
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            duration={1000}
            offset={-150}
            activeClass="active"
            spy={true}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="aboutUs"
            smooth={true}
            duration={1000}
            offset={-300}
            activeClass="active"
            spy={true}
          >
            About Us
          </Link>
        </li>

        <li>
          <Link
            to="ourWork"
            smooth={true}
            duration={1000}
            offset={-170}
            activeClass="active"
            spy={true}
          >
            Our Work
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            smooth={true}
            duration={1000}
            offset={-200}
            activeClass="active"
            spy={true}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            offset={-100}
            activeClass="active"
            spy={true}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
