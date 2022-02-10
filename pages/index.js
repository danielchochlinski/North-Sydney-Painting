import Main from "../components/main/Main";
import Header from "../components/nav/Header";
import AboutUs from "../components/about/AboutUs";
import ProjectList from "../components/projects/ProjectList";
import ServiceList from "../components/services/ServiceList";
import ContactForm from "../components/contact/ContactForm";
import TestimonialList from "../components/testimonials/TestimonialList"


export default function Home() {
  return (
    <div className="app">
      <Header />
      <Main />
      <ServiceList />
      <AboutUs />
      <ProjectList />
      <TestimonialList />

      <ContactForm />
    </div>
  );
}
