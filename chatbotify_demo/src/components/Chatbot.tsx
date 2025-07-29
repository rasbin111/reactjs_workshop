import ChatBot from "react-chatbotify";

const Chatbot = () => {
  const flow = {
    start: {
      message: "Hello world!",
    },
  };
  return (
    <div>
      <h1>Chatbot</h1>
      <ChatBot flow={flow}/>
    </div>
  );
};

export default Chatbot;
