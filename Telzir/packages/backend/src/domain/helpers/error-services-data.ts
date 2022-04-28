const ServiceErrorData = (className: string, err: Error) => {
  console.log(`Error ocurred in ${className}`);
  console.log(err);
  return new Error(err.message);
};
