import { makeStyles } from "@material-ui/core/styles";
import { primaryColor, tealColor } from "../../common/assets/jss/appStyles";

export const useStyles = makeStyles((theme) => ({
    back: {
        position: 'absolute', 
        top: -40, 
        left: -10,
        '& svg': {
            color: primaryColor,
            fontSize: 35
        },
        cursor: "pointer"
    },
    mainProducts: {
        width: "100%",
        margin: "0px auto 25px",
        position: "relative"
    },
    product__container: {
        margin: "20px",
        borderRadius: 4,
    },
    product: {
        minHeight: 200,
        minWidth: 200,
        backgroundColor: '#fff',
        transition: '.3s',
        '&:hover': {
            transform: 'scale(1.05)'
        },
    },
    product__image: {
        maxWidth: 200,
        maxHeight: 180,
        margin: 'auto',
    },
    product__typo: {
        fontSize: "18px",
        fontWeight: 700,
        lineHeight: 1.6,
        color: primaryColor
    },
    product__typo__price: {
        fontSize: "14px",
        fontWeight: 700,
        color: tealColor
    },
    root__rating: {
        textAlign: "center",
    }
}));
