
const Bubble = ({ children }: { children: React.ReactNode }) => (
    <span style={{
        display: 'inline-block',
        animation: 'bubble 1s infinite ease-out',
    }}>
        {children}
        <style>
            {`
          @keyframes bubble {
            0% { transform: translateY(0px) scale(1); opacity: 1; }
            100% { transform: translateY(-20px) scale(0.6); opacity: 0.5; }
          }
        `}
        </style>
    </span>
);

export default Bubble;