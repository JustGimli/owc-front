import { observer } from "mobx-react-lite";
import ConditionsLottery from "../../components/Lottery/Conditions";
import { Container, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CHECKOUT_PATH } from "../../utils/consts";
import cartStore from "../../store/CartStore";
import { iphoneProduct } from "../../utils/products";

const LotteryPage = observer(() => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    cartStore.addToCart({ ...iphoneProduct });
    navigate(CHECKOUT_PATH);
  };

  return (
    <div className="my-5 ">
      <Box className="separator mb-5"></Box>
      <Box className="flex flex-col lg:flex-row lg:space-x-5 mx-10">
        <div className="flex-shrink-0 mb-5 lg:mb-0">
          <img
            src={require("../../static/15.png")}
            alt="Lottery"
            className="w-full max-w-lg mx-auto lg:max-w-none lg:mx-0"
          />
        </div>

        <Box className="flex-1">
          <ConditionsLottery />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FBBF24",
              color: "#FFFFFF",
              mb: 4,
              width: "100%",
              "&:hover": {
                backgroundColor: "#F6AD10",
              },
            }}
            onClick={() => handleNavigate()}
          >
            Participate
          </Button>
        </Box>
      </Box>
    </div>
  );
});

export default LotteryPage;
