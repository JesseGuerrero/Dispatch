import { styled } from '@mui/system';
import {TextareaAutosize} from "@mui/material";

const StyledTextareaAutosize = styled(TextareaAutosize)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default StyledTextareaAutosize;
