import './styles/global.css';

import { useState } from 'react';
import type { ProcessedMessage } from './types/messageType';

import AnalysisResult from './components/AnalysisResult';
import AutomationResult from './components/AutomationResult';
import ResponsePreview from './components/ResponsePreview';

const App = () => {
  const [message, setMessage] = useState('');
  const [aiAnswer, setAiAnswer] = useState<ProcessedMessage>({
    category: '-',
    priority: '-',
    intent: '-',
    confidence: 0,
    extractedData: {
      orderNumber: '-',
      product: '-',
    },
    recommendedAction: 'Keine',
    response: 'Keine',
  });

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
      setAiAnswer(data);
    } catch (error) {
      console.error('Fehler beim Senden der Nachricht:', error);
    }
  };

  return (
    <main className="app">
      <header className="app-header">
        <div className="app-header-content">
          <span className="app-eyebrow">KI-AUTOMATISIERUNG</span>

          <h1 className="app-title">KI Inbox AUTOMATISIERUNG</h1>

          <p className="app-description">
            Eingehende Nachrichten analysieren, wichtige Informationen extrahieren und die nächsten Schritte mit KI
            automatisieren.
          </p>
        </div>
      </header>

      <div className="inbox">
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

        <div className="inbox-results">
          <AnalysisResult aiAnswer={aiAnswer} />

          <AutomationResult recommendedAction={aiAnswer.recommendedAction}/>

          <ResponsePreview response={aiAnswer.response}/>
        </div>
      </div>
    </main>
  );
};

export default App;
