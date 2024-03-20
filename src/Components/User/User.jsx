import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id, name, email} = user;
    const userStyle = {
        border: '1px solid green',
        borderRadius: '10px'
    }
    return (
        <div style={userStyle}>
            <h2>Name: {name}</h2>
            <p>Id: {id}</p>
            <p>Email: {email}</p>
            <Link to={`/user/${id}`}>Details</Link>
        </div>
    );
};

export default User;