import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

const HeaderFaith = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={8} textAlign={"start"}>
          <Grid item md={6} color={"white"} sm={6} xs={12}>
            <Box width={"70%"}>
              <Typography fontSize={{ md: 16, sm: 12, xs: 15 }} p={2}>
                WELCOME TO ADATOS ACADEMY
              </Typography>
              <Typography
                fontSize={{ md: "2.5em", sm: "1.3em", xs: "1.5em" }}
                fontWeight={800}
                lineHeight={{ md: "50px", sm: "30px" }}
                p={{ md: 2, sm: 0 }}
              >
                Ascend in knowledge with ADATAOS.
              </Typography>
              <Typography fontSize={{ md: 16, sm: 12 }} p={1}>
                Embark on a journey of intellectual ascent with Adatos Academy,
                where learning reaches new heights and knowledge
                unfolds at every step.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "orange",
                  borderRadius: 20,
                  fontWeight: { md: 600, sm: 600, xs: "lighter" },
                  px: { md: 3, sm: 3 },
                  mx: 3,
                  mt: 3,
                  "&:hover": {
                    bgcolor: "white",
                    color: "orange",
                  },
                }}
              >
                GO TO ADATOS
              </Button>
            </Box>
          </Grid>
          <Grid item md={6} mt={4} sm={6} xs={0}>
            <Box display={{ md: "block", sm: "block", xs: "none" }}>
              <img
                src="https://preview.colorlib.com/theme/byfaith/images/about_1.jpg"
                alt="img"
                width={"80%"}
                style={{
                  borderRadius: 8,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HeaderFaith;
