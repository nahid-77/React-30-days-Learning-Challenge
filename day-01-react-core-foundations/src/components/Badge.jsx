export default function Badge({text, color = '#007bff'}){
    const style = {
        display : 'inline-block',
        padding : '4px 10px',
        fontSize : '0.8rem',
        fontWeight : '600',
        lineHeight : 1,
        color : '#fff',
        backgroundColor : color,
        borderRadius : '20px',
        textAlign : 'center',
        whiteSpace : 'nowrap',
        verticalAlign : 'baseline'

    };

    return(
        <span style = {style}>{text}</span>
    );
}