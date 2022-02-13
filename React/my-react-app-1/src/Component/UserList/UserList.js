import { useState } from 'react';
import './UserList.css';
import User from "../User/User";
import Spinner from "../Common/Spinner";
import DetailUser from "../DetailUser/DetailUser";


function UserList(props) {

    const {onModelClose , onDeleteUser , showUsers , clickedUser , isModalOpen} = useUserListHooks();

    return (
        <div className="user-list-box" >

            <div className="all-users-box">
                {
                    (!props.usersData) ?
                        <Spinner /> :
                        showUsers(props.usersData)
                }
            </div>
            {
                isModalOpen &&
                <DetailUser onDeleteUser={onDeleteUser} onModelClose={onModelClose} userDetails={clickedUser} isModalOpen={isModalOpen} />
            }
        </div>
    );
}

function useUserListHooks() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [clickedUser, setClickedUser] = useState(null);

    const onModelClose = () =>{
        setIsModalOpen(false);
    }

    const onUserClick = (user) =>{
        setIsModalOpen(true);
        setClickedUser(user);
    }

    const showUsers = (usersData) =>{
        return usersData.map((user) => {
            return <div> <User onUserClick={onUserClick} userDetails={user} /> </div>
        });
    }

    const onDeleteUser = () =>{
        console.log(clickedUser.id);
        const id = clickedUser.id;
        fetch(`https://dummyapi.io/data/v1/user/${id}`, {
            method: 'DELETE',
            headers: {
                "app-id": "61ed31db887c0138889d09ee"
            }
        })
            .then((data) => {
                setIsModalOpen(false)
                // this.props.refreshData();
            });
    }

    return {onModelClose , onDeleteUser , showUsers , clickedUser , isModalOpen};
}

export default UserList;    