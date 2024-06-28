import { HeroImage } from "../../../../../../assets";
import { Box } from "@mui/material";
const HeroImages = () => {
  return (
    <>
      <img
        src={HeroImage}
        style={{ height: "650px", width: "643px", objectFit: "cover" }}
      />
    </>
  );
};

export default HeroImages;
