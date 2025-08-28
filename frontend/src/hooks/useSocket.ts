import { useEffect, useRef } from "react";
import { io, Socket, type SocketOptions } from "socket.io-client";

type Params = {
  url?: string;
  onConnect?: () => void;
  onDisconnect?: () => void;
  onEvent?: (event: string, ...args: unknown[]) => void;
};

export default function useSocket({
  url = import.meta.env.VITE_SOCKET_SERVER,
  onConnect,
  onDisconnect,
  onEvent,
}: Params) {
  const hasConnected = useRef(false);
  const socketRef = useRef<Socket>(null);

  const addListeners = () => {
    if (!socketRef.current) {
      return;
    }

    if (onConnect) {
      socketRef.current.on("connect", onConnect);
    }

    if (onEvent) {
      socketRef.current.onAny(onEvent);
    }

    if (onDisconnect) {
      socketRef.current.on("disconnect", onDisconnect);
    }
  };

  const connect = (options?: SocketOptions) => {
    if (hasConnected.current) {
      return;
    }

    socketRef.current = io(url, { ...options, transports: ["websocket"] });
    hasConnected.current = true;

    addListeners();
  };

  const disconnect = () => {
    if (hasConnected.current) {
      socketRef.current?.removeAllListeners();
      socketRef.current?.disconnect();
      hasConnected.current = false;
    }
  };

  useEffect(() => {
    return () => disconnect();
  }, []);

  return {
    connect,
    socket: socketRef.current,
  };
}
