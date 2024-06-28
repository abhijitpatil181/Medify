import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import routes from "./router/Router";
import theme from "./theme/theme";
import { CssBaseline } from "@mui/material";

function App() {
  console.log("theme", theme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes}>
          <CssBaseline />
        </RouterProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
