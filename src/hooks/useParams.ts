import { useEffect, useState } from "react";

interface Params {
  [key: string]: string;
}

const useParams = (): Params => {
  const [params, setParams] = useState<Params>({});

  useEffect(() => {
    // Function to parse the query string and extract parameters
    const getParamsFromQueryString = (search: string): Params => {
      const paramPairs = search.slice(1).split("&");
      const params: Params = {};

      paramPairs.forEach((pair) => {
        const [key, value] = pair.split("=");
        if (key && value) {
          params[key] = decodeURIComponent(value);
        }
      });

      return params;
    };

    // Extract parameters from the current URL
    const currentParams = getParamsFromQueryString(window.location.search);

    // Update state with the extracted parameters
    setParams(currentParams);

    // Function to update parameters when the URL changes
    const handlePopstate = () => {
      const updatedParams = getParamsFromQueryString(window.location.search);
      setParams(updatedParams);
    };

    // Add event listener for popstate to update parameters on back/forward navigation
    window.addEventListener("popstate", handlePopstate);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  return params;
};

export default useParams;
