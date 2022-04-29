import { returnDataProps } from "components/CheckPrieceCallsPage/MainCheckPrieceCalls/controller/populate-data-box";

type DDDsProps = "011" | "016" | "017" | "018";
type planProps = "TalkMore30" | "TalkMore60" | "TalkMore120";
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
  if (plan === "TalkMore30") return 30;
  else if (plan === "TalkMore60") return 60;
  else if (plan === "TalkMore120") return 120;
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

const priceCurrencyBr = (price: number): string =>
  price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

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

    const withoutPlain = timeNumber * priecePerMinute;
    const withPlain = prieceWithPlain(timeNumber, minutesPlan, priecePerMinute);

    const resultWithPlain = priceCurrencyBr(withPlain);
    const resultWithoutPlain = priceCurrencyBr(withoutPlain);

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
