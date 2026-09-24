import './styles/global.css';

import MessageInput from './components/MessageInput';

const App = () => {
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
        <MessageInput />
      </div>
    </main>
  );
};

export default App;
