// import { useEffect, useState } from "react";


// function useCurrencyInfo(currency){
//     const [data, setData] = useState({})
//     currency = currency.toUpperCase();
    
//     useEffect(() => {
//         fetch(`https://v6.exchangerate-api.com/v6/c0a9fef87c9240f4cf788bfb/latest/{currency}`)
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]))

//         console.log(data);
//     }, [currency])

//     return data;
// }



// export default useCurrencyInfo




import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    baseCurrency = baseCurrency.toUpperCase();

    fetch(`https://v6.exchangerate-api.com/v6/c0a9fef87c9240f4cf788bfb/latest/${baseCurrency}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((res) => setData(res.conversion_rates))
      .catch((err) => setError(err));

  }, [baseCurrency]);

  console.log(data);

  return data;
}

export default useCurrencyInfo;
