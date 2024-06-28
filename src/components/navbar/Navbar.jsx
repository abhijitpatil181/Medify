import { MedifyLogo } from "../../assets";
import { NavItems, NavbarWrapper } from "./Navbar.styled";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material";

const navItems = [
  "Find Doctors",
  "Hospitals",
  "Medicines",
  "Surgeries",
  "Software For Provider",
  "Facilities",
  "My Bookings",
];

const Navbar = () => {
  const theme = useTheme();
  theme.components.MuiButton.styleOverrides.root.color;
  return (
    <>
      <NavbarWrapper>
        <img src={MedifyLogo} style={{ height: "27px", width: "92px" }} />

        <NavItems>
          {navItems.map((item) => (
            <Button
              key={item}
              variant={item === "My Bookings" ? "contained" : "none"}
              sx={{
                margin: "1rem 0 1rem 1.5rem",
                textTransform: "none",
                color:
                  item === "My Bookings"
                    ? `${theme.components.MuiButton.styleOverrides.root.color}`
                    : "#102851",
              }}
            >
              {item}
            </Button>
          ))}
        </NavItems>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
