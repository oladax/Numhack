import React, { useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [callerInfo, setCallerInfo] = useState(null);

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const fetchCallerInfo = async () => {
    try {
      const response = await axios.get('https://api.truecaller.com/v1/verify', {
        params: {
          phoneNumber: phoneNumber,
        },
        headers: {
          Authorization: 'Bearer i6gGEdd17ebe0e8054ac99673e168c9565824',
        },
      });

      setCallerInfo(response.data);
    } catch (error) {
      console.error('Error fetching caller info:', error);
    }
  };

  return (
    <div>
      <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} placeholder="Enter phone number" />
      <button onClick={fetchCallerInfo}>Fetch Caller Info</button>
      {callerInfo && (
        <div>
          <h2>Caller Information</h2>
          <p>Caller Name: {callerInfo.name}</p>
          <p>Carrier: {callerInfo.carrier}</p>
          <p>Spam: {callerInfo.spam}</p>
          <p>User Feedback: {callerInfo.feedback}</p>
          <img src={callerInfo.profileImage} alt="Profile" />
        </div>
      )}
    </div>
  );
};

export default MyComponent;
