import React, { useState } from "react";
import { Grid, Card, Box } from "@mui/material";
import { TextWrap02 } from "../new-arrivals/new-arrivals.styled";
// import ReactionButtons from "../add-reaction";
import { BrandName } from "../brands/brand.styled";
import useMediaQuery from "../../hooks/use-media-query";
import { useNavigate } from "react-router-dom";
// import { AllReactions } from "../all-reactions/all-reactions";

const CategoryCard = (props: any) => {
  const { post } = props;
  const { id } = post;
  const category1 = [
    "clothing",
    "footwear",
    "jewellery",
    "watch",
    "bag",
    "sunglasses",
  ];
  let history = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  const { isMobile } = useMediaQuery();
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex" key={id}>
        <Card
          style={{
            border: "none",
            boxShadow: "none",
            justifyContent: isMobile ? "center" : "flex",
          }}
        >
          <Box
            style={{
              height: "150px",
              width: "150px",
              backgroundColor: " #F4F4F4",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: hovered ? "scale(1.1)" : "scale(1)",
              transition: "all 0.2s ease-in-out",
            }}
            onMouseOver={handleHover}
            onMouseLeave={handleMouseLeave}
            onClick={() => history(`/articles/${id}`)}
          >
            <BrandName
              src={post}
              onMouseOver={handleHover}
              onMouseLeave={handleMouseLeave}
            />
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CategoryCard;