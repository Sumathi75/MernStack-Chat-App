import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:5000", {
        query: {
          userId: authUser._id,
        },
      });

      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => {
        socket.close();
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  /**
   * @param {string} conversationId 
   */
  const joinConversation = (conversationId) => {
    if (socket && conversationId) {
      socket.emit("joinConversation", conversationId);
    }
  };

  /**
   * @param {string} conversationId 
   * @param {string} userId 
   */
  const emitTyping = (conversationId, userId) => {
    if (socket && conversationId && userId) {
      socket.emit("typing", { conversationId, userId });
    }
  };

  return (
    <SocketContext.Provider value={{ socket, onlineUsers, joinConversation, emitTyping }}>
      {children}
    </SocketContext.Provider>
  );
};
