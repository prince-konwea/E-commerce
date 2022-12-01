import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import {useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/CLose";
import AddIcon  from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import {shades} from "../../theme";

import {
    decreaseCount,
    increaseCount,
    removeFromCart,
    setIsCartOpen,
} from "../../state";
import { useNavigate } from "react-router-dom";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CartMenu = () => {
  
    const navigate = useNavigate();
    const dispatch = useDispatch();
}

export default CartMenu;