import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { TextWrap4 } from "../navbar/navbar.styled";
import useMediaQuery from "../../hooks/use-media-query";
import { addPoster } from "../../store/poster/services";

const Poster = () => {
  const { isMobile, isDesktop } = useMediaQuery();

  const dispatch = useAppDispatch();
  const posters = useAppSelector((state) => state.posters.poster);

  useEffect(() => {
    if (posters.length) {
      dispatch(addPoster());
      const intervalId = setInterval(() => {
        setIndex((index) => (index + 1) % posters.length);
      }, 3000);
      return () => clearInterval(intervalId);
    }
  }, [posters.length, dispatch]);

  const [index, setIndex] = useState(0);

  return (
    <Grid container display="flex" style={{ marginLeft: 40, marginRight: 40 }}>
      <Grid
        item
        xs={6}
        sm={6}
        md={6}
        lg={6}
        style={{
          height: isDesktop ? "250px" : isMobile ? "350px" : "600px",
          display: "flex-column",

          backgroundImage: `url(${posters[index].image})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      >
        <Grid
          item
          xs={10}
          sm={12}
          md={7}
          lg={6}
          sx={{ pl: isDesktop ? 10 : 3, mt: isDesktop ? 20 : 10 }}
        >
          <TextWrap4>{posters[index].name}</TextWrap4>
        </Grid>
        <Grid
          item
          xs={11}
          sm={10}
          md={7}
          lg={7}
          sx={{ pl: isDesktop ? 10 : 3 }}
        >
          <TextWrap4>homeDescription</TextWrap4>
        </Grid>
      </Grid>
      <Grid
        item
        xs={6}
        sm={6}
        md={6}
        lg={6}
        style={{
          height: isDesktop ? "250px" : isMobile ? "350px" : "600px",
          display: "flex-column",
          backgroundImage: `url(${posters[index].image})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      >
        <Grid
          item
          xs={10}
          sm={12}
          md={7}
          lg={6}
          sx={{ pl: isDesktop ? 10 : 3, mt: isDesktop ? 20 : 10 }}
        >
          <TextWrap4>{posters[index].name}</TextWrap4>
        </Grid>
        <Grid
          item
          xs={11}
          sm={10}
          md={7}
          lg={7}
          sx={{ pl: isDesktop ? 10 : 3 }}
        >
          <TextWrap4>homeDescription</TextWrap4>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Poster;
