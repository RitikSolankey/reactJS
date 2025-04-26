//have to import style from module file
import styles from './Button.module.css'
function Button() {
    
    /* 
        for inline css make an object with all the styling
        remember to use cambel casing convention and all styling should be in string fromat
        const styles = 
        .button {
            backgroundColor: "blue",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
        }

        return(
        <button style={styles}>Click me</button>
    );
    for styling remove the class name and just introduce dynamic value and add styles object like above.
    */

    return(
        <button className={styles.button}>Click me</button>
    );
}
export default Button