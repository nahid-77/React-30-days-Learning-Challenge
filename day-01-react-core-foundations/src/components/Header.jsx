export default function Header({title, rightElement}){
    const headerStyle = {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : '16px 20px',
        backgroundColor : '#f8f9fa',
        borderBottom : '1px solid #dee2e6',
        marginBottom : '20px',
    };

    const titleStyle = {
        margin : 0,
        fontSize : '2.25rem',
        fontWeight : 'bold',
        color : '#212529',
    };

    return(
        <header style = {headerStyle}>
            <h2 style = {titleStyle}>{title}</h2>
            <div>{rightElement}</div>
        </header>
    );
}