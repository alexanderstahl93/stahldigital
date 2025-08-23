export default function ViennaSkyline() {
  return (
    <div className="vienna-skyline">
      <svg viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg">
        {/* Background gradient */}
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f0f9ff" stopOpacity="0.3"/>
            <stop offset="50%" stopColor="#e0f2fe" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="#f0fdf4" stopOpacity="0.1"/>
          </linearGradient>
        </defs>
        
        {/* Sky gradient background */}
        <rect width="100%" height="100%" fill="url(#skyGradient)"/>
        
        {/* Ground line */}
        <line x1="0" y1="200" x2="1200" y2="200" stroke="#d1d5db" strokeWidth="2" opacity="0.3"/>
      </svg>
    </div>
  );
}
