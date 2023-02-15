import { Oval } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <Oval
      height={20}
      width={20}
      color="var(--dark-orange)"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="var(--light-orange)"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default LoadingSpinner;
