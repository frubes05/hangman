import { useState, useEffect } from 'react';

import axios from 'axios';

const useFetch = ({url, method, onSuccess, onError, onInit}) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('Starting...');
  const [code, setCode] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    if (response) {
        onSuccess(response, code);
    }
  }, [response])

  useEffect(() => {
    if (error) {
        onError(error);
    }
  }, [error])

  useEffect(() => {
    if (onInit && method === 'get') {
      handleFetch(url);
    }
  }, [onInit])

  const handleFetch = (url, payload, options) => {
    setStatus('Pending');
    axios[method](url, payload, options)
      .then((res) => {
          setCode(res.status)
          setResponse(res.data);
      })
      .then(res => setStatus('Fullfilled'))
      .catch((err)=> {
          setError(err);
          setStatus('Pending');
      })
  }  
  return {handleFetch, data, code, status}
}

export default useFetch