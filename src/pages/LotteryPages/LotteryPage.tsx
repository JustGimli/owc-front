import { observer } from "mobx-react-lite";
import ConditionsLottery from "../../components/Lottery/Conditions";

const LotteryPage = observer(() => {
  return (
    <div className="my-5">
      <div className="separator"></div>

      <div className="flex space-x-5">
        <div>
          <img src={require("../../static/lottery.webp")} />
        </div>
        <div>
          <ConditionsLottery />
        </div>
      </div>
    </div>
  );
});

export default LotteryPage;
