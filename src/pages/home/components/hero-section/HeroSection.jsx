import { Hero } from "./HeroSection.styled";
import { Navbar } from "../../../../components";
import { HeroTitle } from "./components";
import Search from "../search/Search";

const HeroSection = () => {
  return (
    <>
      <Hero>
        <Navbar />
        <HeroTitle />
        <Search />
      </Hero>
    </>
  );
};

export default HeroSection;
