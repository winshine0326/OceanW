
const Float = ({ children }: { children: React.ReactNode }) => (
    <span style={{
        display: 'inline-block',
        animation: 'float 2s ease-in-out infinite',
    }}>
        {children}
        <style>
            {`
          @keyframes float {
            0%   { transform: translateY(0px); }
            50%  { transform: translateY(-6px); }
            100% { transform: translateY(0px); }
          }
        `}
        </style>
    </span>
);

export default Float;