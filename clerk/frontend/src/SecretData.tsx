import { useState } from 'react';
import { useAuth } from '@clerk/clerk-react';

export default function SecretData() {
  const [data, setData] = useState(null);
  const { getToken } = useAuth(); // This is the magic function

  const callBackend = async () => {
    try {
      // 1. Get the short-lived JWT from Clerk
      const token = await getToken();

      // 2. Send the request to your Python backend
      const response = await fetch("http://localhost:8000/api/data", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // The "Bearer" prefix is a standard format for JWTs
          "Authorization": `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error("Backend rejected the token");

      const result = await response.json();
      setData(result.message);
    } catch (error) {
      console.error("Auth Error:", error);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <button onClick={callBackend}>Fetch Secret Data</button>
      {data && <p>Backend says: <strong>{data}</strong></p>}
    </div>
  );
}