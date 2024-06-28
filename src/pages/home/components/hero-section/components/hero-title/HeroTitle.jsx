import { Title } from "./HeroTitle.styled";
import HeroText from "./HeroText";
import HeroImages from "./HeroImage";

const HeroTitle = () => {
  return (
    <>
      <Title>
        <HeroText />
        <HeroImages />
      </Title>
    </>
  );
};

export default HeroTitle;
