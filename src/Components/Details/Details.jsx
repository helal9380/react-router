import { useLoaderData } from "react-router-dom";

const Details = () => {
    const userDetail = useLoaderData()
    console.log(userDetail)
    const {name, email, website} = userDetail;
    return (
        <div>
            <h2>User Name : {name}</h2>
            <h4>User Email : {email}</h4>
            <h3>User Website: {website}</h3>
        </div>
    );
};

export default Details;