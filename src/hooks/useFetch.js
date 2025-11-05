import React, { useEffect, useState } from "react";
import { fetchUserPlaces } from "../http";

function useFetch(fetchFun, initalValue) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  // const [userPlaces, setUserPlaces] = useState([]);// i don't name state for this name this because this is generic
  const [fecthData, setFetchData] = useState(initalValue);
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const data = await fetchFun();
        setFetchData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }

      setIsFetching(false);
    }

    fetchPlaces();
  }, [fetchFun]);
  return { isFetching, error, fecthData };
}

export default useFetch;
