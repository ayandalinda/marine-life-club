export default function ProgrammeDetailModal({ programme, onClose }) {
  if (!programme) return null;

  return (
    <div
      className="prog-modal-overlay show"
      role="dialog"
      aria-modal="true"
      aria-labelledby="prog-modal-title-el"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="prog-modal">
        <div className="prog-modal-head">
          <div className="prog-modal-icon">{programme.icon}</div>
          <h2 className="prog-modal-title" id="prog-modal-title-el">{programme.title}</h2>
          <p className="prog-modal-tagline">{programme.tagline}</p>
          <button className="prog-modal-close" onClick={onClose} aria-label="Close">&times;</button>
        </div>
        <div className="prog-modal-body">
          <div className="prog-detail-section">
            <h4>Overview</h4>
            <p>{programme.description}</p>
          </div>
          {Array.isArray(programme.activities) && programme.activities.length > 0 && (
            <div className="prog-detail-section">
              <h4>Activities</h4>
              <div className="prog-activities">
                {programme.activities.map((a, i) => (
                  <div className="prog-activity" key={i}>
                    <div className="prog-activity-dot"></div>
                    <p>{a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="prog-how-to-join">
            <h4>How to Join</h4>
            <p>{programme.howToJoin}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
