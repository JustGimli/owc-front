import { observer } from "mobx-react-lite";
import ConditionsLottery from "../../components/Lottery/Conditions";
import { Container, Box } from "@mui/material";

const LotteryPage = observer(() => {
  return (
    <div className="my-5">
      <Box className="separator mb-5"></Box>
      <Box className="flex flex-col lg:flex-row lg:space-x-5">
        <div className="flex-shrink-0 mb-5 lg:mb-0">
          <img
            src={require("../../static/lottery.webp")}
            alt="Lottery"
            className="w-full max-w-lg mx-auto lg:max-w-none lg:mx-0"
          />
        </div>
        <Box className="flex-1">
          <ConditionsLottery />
        </Box>
      </Box>
    </div>
  );
});

export default LotteryPage;
