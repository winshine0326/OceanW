const Wavy = ({ children }: { children: React.ReactNode }) => (
    <span style={{
        display: 'inline-block',
        animation: 'wavy 0.5s infinite alternate ease-in-out',
    }}>
        {children}
        <style>
            {`
          @keyframes wavy {
            0% { transform: translateX(-3px); }
            100% { transform: translateX(3px); }
          }
        `}
        </style>
    </span>
);
export default Wavy;