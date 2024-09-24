import RootLayout from "./RootLayout.jsx";
import Hero from "./components/Hero.jsx";
import CarList from "./components/CarList.jsx";
import Drivers from "./components/Drivers.jsx";
import WorkingHours from "./components/WorkingHours.jsx";
import Pricing from "./components/Pricing.jsx";
import { createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import WhyUs from "./components/WhyUs.jsx";
import OurServices from "./components/OurServices.jsx";
import FAQ from "./components/FAQ.jsx";
import faqData from "./utils/faqData.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: (
          <>
            <Hero />
            <WorkingHours />
            <Pricing />
            <OurServices />
            <WhyUs />
            <h2 className="font-extrabold text-center text-2xl md:text-4xl mb-6 font-serif text-gray-700">Frequent Asked Question</h2>
            {faqData.map(({ id, question, answer }) => (
              <FAQ key={id} question={question} answer={answer} />
            ))}
          </>
        ),
      },
      { path: "cars", element: <CarList /> },
      { path: "drivers", element: <Drivers /> },
      { path: "workingHours", element: <WorkingHours /> },
      { path: "pricing", element: <Pricing /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
