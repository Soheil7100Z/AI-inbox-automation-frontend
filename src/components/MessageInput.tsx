import '../styles/messageInput.css';

const MessageInput = () => {
  return (
    <section>
      <div className="message-input-header">
        <h2 className="message-input-title">Eingehende Nachricht</h2>
        <p className="message-input-description">
          Fügen Sie eine eingehende E-Mail oder Kundennachricht ein, um sie mit KI zu analysieren.
        </p>
      </div>
      <textarea className="message-input-textarea" placeholder="Eingehende Nachricht hier einfügen..." />
      <div className="message-input-footer">
        <button className="message-input-button"> Nachricht analysieren</button>
      </div>
    </section>
  );
};

export default MessageInput;
