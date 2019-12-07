import React, { useEffect, useState } from 'react';
import openSocket from 'socket.io-client';

const SessionCounter = props => {

  const [sessions, setSessions] = useState(0);

  useEffect( () => {
    // to make it work start server.js file in root directory
    const socket = openSocket(
      'http://localhost:8000', 
      {reconnection: false, transports: ['websocket'], upgrade: false}
    );
    socket.on('session count', (count) => {
      setSessions(count);
    });
    socket.on('reconnecting', (attemptNumber) => {

    });
    return () => { socket.close() }
  }, [])

  return (
    <div>
      { sessions ? `Active sessions: ${sessions}`: `Active sessions: X` }
    </div>
  );
}

export default SessionCounter;