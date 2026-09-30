import { useState } from 'react';
import '../styles/messageInput.css';

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    if (!message.trim()) return;

    try {
      const res = await fetch('/api/process-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      if (!res.ok) throw new Error('Fehler bei der Anfrage');

      const data = await res.json();
      console.log('AI response:', data);
    } catch (error) {
      console.error('Fehler beim Senden der Nachricht:', error);
    }
  };

  return (
    <section>
      <div className="message-input-header">
        <h2 className="message-input-title">Eingehende Nachricht</h2>
        <p className="message-input-description">
          Fügen Sie eine eingehende E-Mail oder Kundennachricht ein, um sie mit KI zu analysieren.
        </p>
      </div>
      <textarea
        className="message-input-textarea"
        placeholder="Eingehende Nachricht hier einfügen..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="message-input-footer">
        <button className="message-input-button" onClick={handleSubmit}>
          Nachricht analysieren
        </button>
      </div>
    </section>
  );
};
export default MessageInput;
