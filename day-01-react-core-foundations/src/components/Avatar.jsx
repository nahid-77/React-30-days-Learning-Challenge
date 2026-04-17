export default function Avatar({src, alt = 'Avatar', size = 50}){

    const style = {
        width : size,
        height : size,
        borderRadius : '50%',
        objextFit : 'cover',
    };

    return(
        <img src={src} alt={alt} style={style} />
    )
}
