import { useState, useContext } from "react";
import { Link, animateScroll } from "react-scroll";
import ReorderIcon from "@material-ui/icons/Reorder";
import Notification from "../ui/Notification";
import NotificationContext from "../../store/notification-context";

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const [style, setStyle] = useState(false);
  const notificatioCtx = useContext(NotificationContext);
  const activeNotification = notificatioCtx.notification;

  return (
    <nav className="nav">
      <h1>North Sydney Painting and Decorating</h1>

      <div>
        <a className="call">call: +61 487 556 397</a>
      </div>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
      <div className="navbar" id={showLinks ? "hidden" : ""}>
        <a>
          <Link onClick={() => animateScroll.scrollToTop()}>Home</Link>
        </a>
        <a>
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
        </a>

        <a>
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
        </a>

        <a>
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
        </a>

        <a>
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
        </a>

        <a>
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
        </a>

        <button onClick={() => setShowLinks(!showLinks)}>
          <ReorderIcon />
        </button>
      </div>
    </nav>
  );
}

export default Header;
