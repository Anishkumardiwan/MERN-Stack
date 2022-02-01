import { Component } from 'react';
import './UserList.css';
import User from "../User/User";
import Spinner from "../Common/Spinner";
import DetailUser from "../DetailUser/DetailUser"

class UserList extends Component {

    constructor(props) {
        super();
        this.state = {
            isModalOpen: false,
            clickedUser: null
        }
    }

    onUserClick(user) {
        fetch(`https://dummyapi.io/data/v1/user/${user.id}`, {
            headers: {
                "app-id": "61ed31db887c0138889d09ee"
            }
        }).then(data => data.json())
            .then(user => {
                this.setState({
                    isModalOpen: true,
                    clickedUser: user
                })

            });
    }

    onDeleteUser(user) {
        fetch(`https://dummyapi.io/data/v1/user/${user.id}`, { method: 'DELETE' })
            .then((data) => console.log("delete successful"));
    }

    onModelClose() {
        this.setState({
            isModalOpen: false
        })
    }

    showUsers() {
        return this.props.usersData.map((user) => {
            return <div> <User onUserClick={this.onUserClick.bind(this)} userDetails={user} /> </div>
        });
    }

    render() {
        return (
            <div className="user-list-box" >

                <div className="all-users-box">
                    {
                        (!this.props.usersData) ?
                            <Spinner /> :
                            this.showUsers()
                    }
                </div>
                {
                    this.state.isModalOpen &&
                    <DetailUser userDetails={this.state.clickedUser} onModelClose={this.onModelClose.bind(this)} onDeleteUser={this.onDeleteUser.bind(this)} />
                }
            </div>
        );
    }
}

export default UserList;    