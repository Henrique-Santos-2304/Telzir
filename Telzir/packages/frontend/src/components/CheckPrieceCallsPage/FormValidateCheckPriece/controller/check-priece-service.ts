import { returnDataProps } from "components/CheckPrieceCallsPage/MainCheckPrieceCalls/controller/populate-data-box";

type DDDsProps = "011" | "016" | "017" | "018";
type planProps = "FaleMais30" | "FaleMais60" | "FaleMais120";
export type formCalcs = {
  origin: DDDsProps;
  destiny: DDDsProps;
  time: string;
  plain: planProps;
};

const switchTablePrices = (origin: DDDsProps, destiny: DDDsProps): number => {
  if (origin === "011" && destiny === "016") return 1.9;
  else if (origin === "016" && destiny === "011") return 2.9;
  else if (origin === "011" && destiny === "017") return 1.7;
  else if (origin === "017" && destiny === "011") return 2.7;
  else if (origin === "011" && destiny === "018") return 0.9;
  else if (origin === "018" && destiny === "011") return 1.9;
  else return 0;
};

const switchTablePlan = (plan: planProps): number => {
  if (plan === "FaleMais30") return 30;
  else if (plan === "FaleMais60") return 60;
  else if (plan === "FaleMais120") return 120;
  else return 0;
};

const prieceWithPlain = (
  time: number,
  minutePlan: number,
  pricePerMinute: number
): number => {
  if (time > minutePlan) {
    const minuteInterest = time - minutePlan;
    const priceMinute = minuteInterest * pricePerMinute;
    const percentsExtra = (10 * priceMinute) / 100;

    return priceMinute + percentsExtra;
  } else {
    return 0;
  }
};
const handleCheckPriece = async ({
  origin,
  destiny,
  time,
  plain,
}: formCalcs) => {
  if (origin && destiny && time && plain) {
    const timeNumber = Number(time);
    const priecePerMinute = switchTablePrices(origin, destiny);
    const minutesPlan = switchTablePlan(plain);

    const resultWithoutPlain = timeNumber * priecePerMinute;
    const resultWithPlain = prieceWithPlain(
      timeNumber,
      minutesPlan,
      priecePerMinute
    );

    const arrayResult: returnDataProps = {
      dddOrigin: origin,
      dddDestiny: destiny,
      plain,
      timeCall: time,
      resultWithPlain,
      resultWithoutPlain,
    };

    return arrayResult;
  }
};

export { handleCheckPriece };
