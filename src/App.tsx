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

  const [error, setError] = useState<string>('');
  const [isResultExist, setIsResultExist] = useState(false);

  const handleSubmit = async () => {
    setError('');
    setIsResultExist(false);

    if (!message.trim()) {
      setError('Fügen Sie eine eingehende E-Mail oder Kundennachricht ein!');
      return;
    }

    try {
      const res = await fetch('/api/process-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Fehler bei der Anfrage');
      }

      const data = await res.json();
      setAiAnswer(data);
      setIsResultExist(true);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Ein unerwarteter Fehler ist aufgetreten.');
      }
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
            placeholder="Guten Tag, meine Bestellung #48392 ist seit zwei Wochen unterwegs, aber noch nicht angekommen. Können Sie bitte den Lieferstatus prüfen?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <div className="message-input-footer">
            <button className="message-input-button" onClick={handleSubmit}>
              Nachricht analysieren
            </button>

            {error && <span>{error}</span>}
          </div>
        </section>

        <div className="inbox-results">
          <AnalysisResult aiAnswer={aiAnswer} />

          <AutomationResult recommendedAction={aiAnswer.recommendedAction} isResultExist={isResultExist} />

          <ResponsePreview response={aiAnswer.response} />
        </div>
      </div>
    </main>
  );
};

export default App;
