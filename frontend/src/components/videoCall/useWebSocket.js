import {useEffect, useState} from 'react';
import io from 'socket.io-client';

export const useWebSockets = ( enabled) => {
  const [messages, setMessages] = useState([]);
  const input = 'send-chat-message';
  const output = 'chat-message';
  const socket = io('http://localhost:8080');

  const send = message => {
    if (message.trim() === '') {
      return;
    }

    socket.emit(input, {message , sender:"NGO1"});
    setMessages(m => [
        {message , sender:"NGO1"},
      ...m,
    ]);
  };

  //   const fetchFromDevice = async () => {
  //     try {
  //       let res = await StorageManager.get(roomId);
  //       if (res === undefined) {
  //         return [];
  //       }

  //       return res;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(async () => {
  //     try {
  //       setMessages(await fetchFromDevice());

  //       let prior = await getAllChats(roomId);
  //       prior = prior
  //         .map(i => backendToGifted(i))
  //         .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
  //       setMessages(prior);
  //       console.log(prior);
  //       await StorageManager.put(roomId, prior);
  //     } catch (e) {
  //       console.log('Error in getting previous chats');
  //     }
  //   }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    socket.on(output, msg => {
      setMessages(prev => [
        msg,
        ...prev,
      ]);
    });

    return () => socket.disconnect();
  }, [enabled]);

  return {
    send,
    messages,
  };
};