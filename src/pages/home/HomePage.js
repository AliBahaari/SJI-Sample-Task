import { useGetCountriesQuery } from "../../store/services/countries";
import ContentComponent from "./components/ContentComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";

function Home() {
  const getCountries = useGetCountriesQuery();

  return (
    <>
      <HeaderComponent />

      <ContentComponent allData={getCountries} />

      <FooterComponent />
    </>
  );
}

export default Home;
