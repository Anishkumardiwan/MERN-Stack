import { Component } from 'react';
import './UserList.css';
import User from "../User/User";
import Spinner from "../Common/Spinner";
import DetailUser from "../DetailUser/DetailUser";

class UserList extends Component {

    constructor(props) {
        super();
        this.state = {
            isModalOpen: false,
            clickedUser: null,
            isSpinnerOpen: true
        }
    }

    onUserClick(user) {
        this.setState({
            isModalOpen: true,
            clickedUser: user
        });
    }

    onDeleteUser() {
        // console.log(this.state.clickedUser.id);
        const id = this.state.clickedUser.id;
        fetch(`https://dummyapi.io/data/v1/user/${id}`, {
            method: 'DELETE',
            headers: {
                "app-id": "61ed31db887c0138889d09ee"
            }
        })
            .then((data) => {
                this.setState({
                    isModalOpen: false
                });
                // this.props.refreshData();
            });
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
                    <DetailUser onDeleteUser={()=>this.onDeleteUser()} onModelClose={()=>this.onModelClose()} userDetails={this.state.clickedUser} isModalOpen={this.state.isModalOpen} />
                }
            </div>
        );
    }
}

export default UserList;    