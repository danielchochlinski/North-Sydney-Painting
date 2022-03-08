import Main from "../components/main/Main";
import Header from "../components/nav/Header";
import AboutUs from "../components/about/AboutUs";
import ProjectList from "../components/projects/ProjectList";
import ServiceList from "../components/services/ServiceList";
import ContactForm from "../components/contact/ContactForm";
import TestimonialList from "../components/testimonials/TestimonialList";
import Footer from "../components/nav/Footer";
import { NotificationContextProvider } from "../store/notification-context";
import Head from "next/head";

export default function Home(props) {
  return (
    <NotificationContextProvider>
      <Head>
        <Head>
          <title>North Sydney Painting & Decorating</title>
          <meta
            name="description"
            content="North Sydney Painting & Decorating services, top quality."
          />
        </Head>
      </Head>
      <div className="app">
        <Header />
        <Main />
        <ServiceList />
        <AboutUs />
        <ProjectList />
        <TestimonialList />
        <ContactForm googleKey={props.googleKey}/>
        <Footer />
      </div>
    </NotificationContextProvider>
  );
}

export function getStaticProps() {
  return {
    props: {
      googleKey: process.env.GOOGLE_MAP_API_KEY 
    },
  };
}
