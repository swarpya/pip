'use client';

import { useState, useEffect } from 'react';

export default function FetchPrediction() {
  const [result, setResult] = useState('');
  // Use an environment variable to determine the API endpoint
  const apiEndpoint =
    process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: 'Once upon a time' })
    })
      .then((res) => res.json())
      .then((data) => setResult(JSON.stringify(data.result)))
      .catch((err) => console.error('Error fetching prediction:', err));
  }, [apiEndpoint]);

  return (
    <div>
      <h2>Prediction:</h2>
      <p>{result ? result : 'Loading prediction...'}</p>
    </div>
  );
}
