const styles: Record<string, string> = {
  heroSection:
    "flex h-full w-full flex-col lg:flex-row justify-center items-center gap-8 lg:gap-48 overflow-y-auto absolute top-0",
  loginAuthForm:
    "w-[80vw] h-[60vh] xs:w-[80vw] xs:h-auto lg:w-[35vw] py-4 px-0 xs:py-7 xs:px-3 gap-4 bg-[#424569] rounded-2xl opacity-90 flex flex-col items-center",
  formInput:
    "text-[12px] xs:text-[14px] sm:text-[18px] w-4/6 bg-[#272940] py-3 px-4 rounded-lg text-white",
  formLabel:
    "text-center text-[14px] xs:text-[18px] md:text-xl font-semibold text-white",
  formButton:
    "w-1/2 sm:w-1/3 bg-[#272940] rounded-2xl py-1 hover:bg-[#1A1E39] text-white font-bold text-[14px] xs:text-[18px] mb-5",
  formValidationErrors:
    "xs:mb-7 w-[50vw] text-[14px] sm:text-[16px] md:text-[18px] text-[#ef233c] text-center",
};

styles["registerAuthForm"] = styles.loginAuthForm + " lg:h-[90vh] justify-start overflow-y-auto"
styles["loginAuthForm"] += " lg:h-auto justify-center";

export default styles;
