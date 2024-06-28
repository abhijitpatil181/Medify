import { Button, Typography } from "@mui/material";
import { TitleText } from "./HeroText.styled";

const HeroText = () => {
  return (
    <>
      <TitleText>
        <Typography>Skip the travel! Find Online</Typography>
        <Typography>
          <span style={{ color: "#000000" }}>Medical</span>
          <span style={{ color: "#2AA7FF" }}> Centers</span>
        </Typography>

        <Typography>
          Connect instantly with a 24x7 specialist or choose to <br /> video
          visit a particular doctor.
        </Typography>
        <Button
          variant="contained"
          sx={{ textTransform: "none", marginTop: "1.5rem" }}
        >
          Find Centers
        </Button>
      </TitleText>
    </>
  );
};

export default HeroText;
