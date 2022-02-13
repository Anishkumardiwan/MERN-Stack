import { React, Component } from 'react';
import { Modal } from 'react-bootstrap';
import Spinner from '../Common/Spinner';
import ModalDetail from '../ModalDetail/ModalDetail';
import './DetailUser.css';

class DetailUser extends Component {

    constructor(props) {
        super();
        this.state = {
            isLoading: true,
            clickedUser: null
        }
    }

    componentDidMount() {
        fetch(`https://dummyapi.io/data/v1/user/${this.props.userDetails.id}`, {
            headers: {
                "app-id": "61ed31db887c0138889d09ee"
            }
        }).then(data => data.json())
            .then(user => {
                this.setState({
                    isLoading: false,
                    clickedUser: user
                })

            });
    }

    render() {

        // console.log(this.props)

        return (
            <div className='modals'>
                <Modal.Dialog>

                    {
                        (this.state.isLoading) ?
                            <div className='spinner-box'><Spinner /></div> :
                            <ModalDetail onModelClose={this.props.onModelClose} onDeleteUser={this.props.onDeleteUser} userDetails={this.state.clickedUser} />
                    }

                </Modal.Dialog>
            </div>
        );
    }
}

export default DetailUser;