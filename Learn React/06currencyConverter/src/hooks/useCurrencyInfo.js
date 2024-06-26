import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

//   fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
//   .then((res) => res.json())
//   .then((res) => setData(res[currency]))

  async function getData() {
    try {
      const response = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
      );
      const data1 = await response.json();
      setData(data1[currency]);
    } catch (error) {
      console.error("error");
    }
    

  }
  useEffect(() => {
    getData();
  }, [currency]);

  console.log(data)
  return data;
}

export default useCurrencyInfo;
