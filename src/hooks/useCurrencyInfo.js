import { useEffect, useState } from "react";

export default function useCurrencyInfo() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((res) => setData(Object.keys(res.rates)))
      .catch((err) => setError(err));
  }, []);

  if (error) {
    console.error("Error fetching currency data:", error);
  }
  return data;
}
