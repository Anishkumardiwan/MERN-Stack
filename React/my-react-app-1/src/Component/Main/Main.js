
import './Main.css';
import { React, Component } from 'react';
import UserList from '../UserList/UserList';

class Main extends Component {

    constructor() {
        super();
        this.state = {
            textFieldValue: "",
            usersData: null,
            allUsers: null,
            onDeleteUser: false
        }
    }

    // refreshData(){
    //     this.setState({
    //         usersData: null
    //     });
    // }

    componentDidMount() {
        fetch("https://dummyapi.io/data/v1/user?limit=90", {
            headers: {
                "app-id": "61ed31db887c0138889d09ee"
            }
        }).then(data => data.json())
            .then(users => {
                this.setState({
                    usersData: users.data,
                    allUsers: users.data
                })
            })
    }

    onInputChange(event) {
        const inputValue = event.target.value;
        this.setState({
            textFieldValue: inputValue
        })

        // Filter the Users Data
        const filterUsersData = this.state.allUsers.filter((user)=>{
            return user.firstName.toLowerCase().startsWith(inputValue);
        });

        // Change State
        this.setState({
            usersData: filterUsersData
        });
    }

    render() {
        return (

            <div className='main'>
                <div className="head-box">
                    <h1>Users</h1>
                </div>

                <div className='search-box'>
                    <input type="text" onChange={(e) => this.onInputChange(e)} value={this.state.textFieldValue} />
                </div>

                <UserList usersData={this.state.usersData} onUserDelete={() => this.onUserDelete()} />
            </div>
        );
    }
}

export default Main;