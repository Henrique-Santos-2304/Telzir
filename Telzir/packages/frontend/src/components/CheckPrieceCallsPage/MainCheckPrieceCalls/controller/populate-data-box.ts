export type returnDataProps = {
  dddOrigin: string;
  dddDestiny: string;
  plain: string;
  timeCall: string;
  resultWithoutPlain: string;
  resultWithPlain: string;
};

export type boxData = {
  txtKey: string;
  txtValue: string;
};

const populateBox = ({
  dddOrigin,
  dddDestiny,
  plain,
  timeCall,
  resultWithPlain,
  resultWithoutPlain,
}: returnDataProps) => {
  const populateArray: boxData[] = [
    { txtKey: "Origem", txtValue: dddOrigin },
    { txtKey: "Destino", txtValue: dddDestiny },
    { txtKey: "Tempo", txtValue: timeCall },
    { txtKey: "Plano", txtValue: plain },
    { txtKey: "Com Plano", txtValue: resultWithPlain },
    { txtKey: "Sem Plano", txtValue: resultWithoutPlain },
  ];

  return populateArray;
};

export { populateBox };
