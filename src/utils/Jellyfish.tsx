
const Jellyfish = ({ children }: { children: React.ReactNode }) => (
  <span style={{
    display: 'inline-block',
    animation: 'jellyfish 3s ease-in-out infinite',
  }}>
    {children}
    <style>
      {`
        @keyframes jellyfish {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.05); }
          100% { transform: translateY(0px) scale(1); }
        }
      `}
    </style>
  </span>
);

export default Jellyfish;