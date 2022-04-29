import { returnDataProps } from "components/CheckPrieceCallsPage/MainCheckPrieceCalls/controller/populate-data-box";

type formLogin = {
  origin: string;
  destiny: string;
  time: string;
  plain: string;
};
const handleCheckPriece = async ({
  origin,
  destiny,
  time,
  plain,
}: formLogin) => {
  if (origin && destiny && time && plain) {
    const resultWithoutPlain = Number(time) * 1.2;
    const resultWithPlain = Number(time) * 0.6;

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
