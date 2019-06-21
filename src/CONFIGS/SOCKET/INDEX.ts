import dotenv from 'dotenv';
dotenv.config();
console.log(process.env);

const SOCKET: any = {
  HOST: process.env.SOCKET_HOST || "http://fea.socket.chatroom.ques98.cn",
  PORT: "",
};

export default SOCKET;
