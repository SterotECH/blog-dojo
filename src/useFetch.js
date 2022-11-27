import { useState, useEffect } from 'react';
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    setTimeout(
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not fetch data for that result');
          }
          console.table(res);
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.error('fetch aborted ');
          } else {
            setError(err.message);
            setIsLoading(false);
          }
        }),
      1000
    );
    return () => abortController.abort();
  }, [url]);
  return { isLoading, error, data };
};

export default useFetch;
