import Main from "../components/main/Main";
import Header from "../components/nav/Header";
import AboutUs from "../components/about/AboutUs";
import ProjectList from "../components/projects/ProjectList";
import ServiceList from "../components/services/ServiceList";
import ContactForm from "../components/contact/ContactForm";
import TestimonialList from "../components/testimonials/TestimonialList";
import Footer from "../components/nav/Footer";
import { NotificationContextProvider } from "../store/notification-context";


export default function Home() {
  return (
    <NotificationContextProvider>
      <div className="app">
        <Header />
        <Main />
        <ServiceList />
        <AboutUs />
        <ProjectList />
        <TestimonialList />
        <ContactForm />
        <Footer />
      </div>
    </NotificationContextProvider>
  );
}
