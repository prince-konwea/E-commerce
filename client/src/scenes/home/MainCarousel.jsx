import { Box, Typograhy, IconButton, useMediaQuery } from "@mui/material";
import Carousel from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {shades} from "../../theme";

// immport all image from asset folder

const importAll = (r) => r.keys().reduce((acc, item) =>{
    acc[item.replace("./", "")] = r(item);
    return acc;
}, {})

export const heroTextureImports = importAll(
    require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
)

const MainCarousel = () => {
  const isNOnMObile = useMediaQuery("(min-width:600px)")
  return(
    <Carousel
    infiniteLoop={true}
    showThumbs={false}
    showIndicators={false}
    showStatus={false}
    renderArrowPrev={(onClickHandler, hasPrev, label) =>(
        <IconButton
        onClick={onClickHandler}
        sx={{
            position:"absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",

        }}
        >
         <NavigateBeforeIcon sx={{fontSize: 40}} />
        </IconButton>
    )}
    renderArrowNext={(onClickHandler, hasPrev, label) =>(
        <IconButton
        onClick={onClickHandler}
        sx={{
            position:"absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",

        }}
        >
         <NavigateNextIcon sx={{fontSize: 40}} />
        </IconButton>
    )}
    
    >


    </Carousel>
  )
}

export default MainCarousel;