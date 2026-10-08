import '../styles/automationResult.css';

type AutomationResultProps = { recommendedAction: string };

const AutomationResult = ({ recommendedAction }: AutomationResultProps) => {
  return (
    <section>
      <div className="automation-result-header">
        <h2 className="automation-result-title"> Automatisierung </h2>
      </div>

      <div className="automation-result-content">
        <div className="automation-result-status">
          <span className="automation-result-status-icon"> ✓ </span>
          <span className="automation-result-status-text"> Aktion erfolgreich ermittelt</span>
        </div>

        <div className="automation-result-action">
          <span className="automation-result-label">Antwortentwurf</span>

          <p className="automation-result-value">{recommendedAction}</p>
        </div>
      </div>
    </section>
  );
};

export default AutomationResult;
