export default function Card({ title, children }) {

    const style = {
        border : '1px solid #ddd',
        borderRadius : '8px',
        padding : '16px',
        margin : '16px 20px',
        boxShadow : '0 2px 4px rgba(0, 0, 0, 0.1)',

    };

    return(
        <div style={style}>
        <h2>{title}</h2>
        <div style={{ fontSize : '1.75rem', lineHeight : '0.25' }}>{children}</div>
        </div>
    );

}