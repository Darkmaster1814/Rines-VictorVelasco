/* Widget del Log in */
const Login = ({ nombre, evento }) => {
    return (
        <>
            <button className="btn-nav mt-4 me-5" onClick={evento}>
                <i className="nav-i fa-solid fa-right-to-bracket text-center"><p className="textHeader">{nombre}</p></i>
            </button>
        </>
    );
}
export default Login;






