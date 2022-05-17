import styles from "./ContentStyle.module.sass";

const {
  "country-box": countryBox,
  "country-box-image": countryBoxImage,
  "country-box-texts": countryBoxTexts,
  "error-text": errorText,
  "loading-text": loadingText,
} = styles;

function ContentComponent({ allData }) {
  const { data, error, isLoading, isSuccess, isError } = allData;

  const isLoadingText = () => {
    if (isLoading) {
      return <p className={loadingText}>Loading...</p>;
    }
  };

  const isErrorText = () => {
    if (isError) {
      return <p className={errorText}>Fetching Error...</p>;
    }
  };

  const showData = () => {
    if (isSuccess) {
      return data.map((country) => (
        <div key={country.alpha2Code} className={countryBox}>
          <div
            className={`${countryBoxImage} flex justify-center items-center`}
          >
            <img src={country.flags.png} alt={country.name} />
          </div>

          <p
            className={`${countryBoxTexts} flex flex-col justify-center items-center gap-1 text-center`}
          >
            <span className="font-bold text-sm">{country.name}</span>
            <small className="italic text-xs">{country.capital}</small>
          </p>
        </div>
      ));
    }
  };

  return (
    <div className="w-12/12 sm:w-10/12 mx-auto my-10 px-2 sm:px-4 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {showData()}
      {isErrorText()}
      {isLoadingText()}
    </div>
  );
}

export default ContentComponent;
