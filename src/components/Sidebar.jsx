import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = (props) => (
  <Stack
    direction="row"
    sx={{
      overflow: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category, index) => (
      <button
        className="category-btn"
        onClick={() => props.setSelectedCategory(category.name)}
        key={index}
        style={{
          backgroundColor:
            category.name === props.selectedCategory && "#FC1503",
          color: "white",
        }}
      >
        <span
          style={{
            color: category.name === props.selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>

        <span
          style={{
            opacity: category.name === props.selectedCategory ? "1" : "0.8",
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
