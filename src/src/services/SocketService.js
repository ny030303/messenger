import io from "socket.io-client";
export const serverLink = "http://localhost:54000/";

export const socket = io(serverLink, {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});