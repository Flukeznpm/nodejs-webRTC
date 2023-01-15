import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io(`'${process.env.PORT}'`, { transports: ['websocket', 'polling', 'flashsocket'] });

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    return () => {
      socket.off('connect');
    };
  }, []);

  return (
    <div>
      <p>Connected: {'' + isConnected}</p>
    </div>
  );
}

export default App;