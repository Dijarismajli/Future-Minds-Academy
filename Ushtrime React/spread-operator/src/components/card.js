
export const CardChildComponent = ({ fruit }) => {
    return (
        <div style={{
            backgroundColor: '#f9f9f9',
            padding: '16px',
            borderRadius: '12px',
            width: '250px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <img
                src={fruit.image}
                alt={fruit.name}
                style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    marginBottom: '12px'
                }}
            />
            <h3>{fruit.name}</h3>
            <p style={{ color: '#222' }}><strong>Color:</strong> {fruit.color}</p>
            <p style={{ color: '#222' }}><strong>Taste:</strong> {fruit.taste}</p>
        </div>
    );
};