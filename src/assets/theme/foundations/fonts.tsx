import { Global } from "@emotion/react";
import "@fontsource/poppins";
import "@fontsource/Unlock";

const Fonts = () => (
  <Global
    styles={`
      font-family: "Poppins", sans-serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
    `}
  />
);

export default Fonts;
