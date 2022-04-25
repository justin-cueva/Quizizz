import "../../styles/generals.css";

type Props = {
  text: string;
};

const Message = ({ text }: Props) => {
  return (
    <div className="message-box">
      <div className="message-text">{text}</div>
    </div>
  );
};

export default Message;
