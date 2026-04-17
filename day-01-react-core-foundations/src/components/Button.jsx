export default function Button({text, onClick, variant = 'primary'}){

    const style = {
        marginTop : '20px',
        padding : '10px 20px',
        border : 'none',
        borderRadius : '5px',
        cursor : 'pointer',
        backgroundColor : variant === 'primary' ? '#007bff' : '#6c757d',
        color : 'white',
        fontWeight : 'bold'
    };

    return(
        <button style={style} onClick={onClick}>{text}</button>
    )
}