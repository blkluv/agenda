import ServiceCard from "./ServiceCard";
import { BiPen, BiTestTube, BiBarChartAlt2, BiCalendar } from "react-icons/bi";

const Cards = [
  {
    icon: BiCalendar,
    title: "LINK",
    paragraph:
      "We work hard for our clients and are humbled when our results are recognised.",
  },
  {
    icon: BiBarChartAlt2,
    title: "AD",
    paragraph:
      "We work hard for our clients and are humbled when our results are recognised.",
  },
  {
    icon: BiPen,
    title: "MERCH",
    paragraph:
      "We work hard for our clients and are humbled when our results are recognised.",
  },
  {
    icon: BiTestTube,
    title: "LIVE",
    paragraph:
      "We work hard for our clients and are humbled when our results are recognised.",
  },
];

const Services = () => {
  return (
    <div>
      <h1 className="text-3xl text-center subtitle lg:text-4xl">
        What We Do
      </h1>
      <div className="flex flex-col gap-3 lg:flex-row lg:mt-10 lg:mb-10">
        {Cards.map((card) => (
          <ServiceCard
            key={card.title.replace(/\s+/g, "")}
            Icon={card.icon}
            title={card.title}
            paragraph={card.paragraph}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
