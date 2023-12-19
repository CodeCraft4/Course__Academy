import React from "react";
import { Box, Container, Typography } from "@mui/material";
import App from "./Slider/mainSlider";

const Testimonials = () => {
  return (
    <div>
      <Container maxWidth={"lg"}>
        <Box textAlign={"center"} mt={10}>
          <Typography fontWeight={900} color={"orange"}>
            TESTIMONIALS
          </Typography>
          <Typography
            fontWeight={900}
            p={2}
            fontSize={{ md: "2.5em", sm: "2.3em", xs: "1.5em" }}
          >
            Living Testimonies
          </Typography>
          <App />
        </Box>
      </Container>
    </div>
  );
};

export default Testimonials;
