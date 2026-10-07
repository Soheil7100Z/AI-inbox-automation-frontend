import '../styles/analysisResult.css';
import type { ProcessedMessage } from '../types/messageType';

type AnalysisResultProps = { aiAnswer: ProcessedMessage };

const AnalysisResult = ({ aiAnswer }: AnalysisResultProps) => {

  return (
    <section>
      <div className="analysis-result-header">
        <div>
          <h2 className="analysis-result-title">KI-Analyse</h2>
          <p className="analysis-result-subtitle"> Aus der Nachricht extrahierte Informationen</p>
        </div>

        <span className="analysis-result-confidence"> {aiAnswer.confidence} %  </span>
      </div>

      <div className="analysis-result-grid">
        <div className="analysis-result-item">
          <span className="analysis-result-label">Kategorie</span>
          <span className="analysis-result-value">{aiAnswer.category}</span>
        </div>

        <div className="analysis-result-item">
          <span className="analysis-result-label">Priorität</span>
          <span className="analysis-result-value">{aiAnswer.priority}</span>
        </div>

        <div className="analysis-result-item">
          <span className="analysis-result-label">Anliegen</span>
          <span className="analysis-result-value">{aiAnswer.intent}</span>
        </div>
      </div>
    </section>
  );
};
export default AnalysisResult;
