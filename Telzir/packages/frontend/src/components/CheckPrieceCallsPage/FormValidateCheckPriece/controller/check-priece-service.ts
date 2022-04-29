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
    console.log(origin, destiny, time, plain);
  }
};

export { handleCheckPriece };
