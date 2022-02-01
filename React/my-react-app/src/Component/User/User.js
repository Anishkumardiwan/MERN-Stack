
import './User.css';

const User = (props) => {
    const userDetails = props.userDetails;

    const { firstName, lastName, picture } = userDetails;
    const fullName =firstName + " " + lastName;

    return (
        <div onClick={() => props.onUserClick(userDetails)} className="user-box">
            <div className="image-box">
                <img src={picture} width="200px" height="200px" alt="" />
            </div>

            <div className="name-box">

                <h2> {fullName} </h2>

            </div>
        </div>
    )
}

export default User;