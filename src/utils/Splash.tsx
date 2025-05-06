
const Splash = ({ children }: { children: React.ReactNode }) => (
  <span style={{
    display: 'inline-block',
    animation: 'splash 0.8s infinite ease-in-out',
  }}>
    {children}
    <style>
      {`
        @keyframes splash {
          0%   { transform: translateY(0px); }
          30%  { transform: translateY(-6px); }
          60%  { transform: translateY(2px); }
          100% { transform: translateY(0px); }
        }
      `}
    </style>
  </span>
);

export default Splash;