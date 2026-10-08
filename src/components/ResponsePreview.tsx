import '../styles/responsePreview.css';

type ResponsePreviewProps = { response: string };

const ResponsePreview = ({ response }: ResponsePreviewProps) => {
  return (
    <section>
      <div className="response-preview-header">
        <h2 className="response-preview-title"> Nächster Schritt </h2>

        <button className="response-preview-copy-button"> Kopieren </button>
      </div>

      <div className="response-preview-content">
        <p>{response}</p>
      </div>
    </section>
  );
};

export default ResponsePreview;
