import { React, useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import Spinner from '../Common/Spinner';
import ModalDetail from '../ModalDetail/ModalDetail';
import './DetailUser.css';


const DetailUser = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    const [clickedUser, setClickedUser] = useState(null);

    useEffect(() => {
        fetch(`https://dummyapi.io/data/v1/user/${props.userDetails.id}`, {
            headers: {
                "app-id": "61ed31db887c0138889d09ee"
            }
        }).then(data => data.json())
            .then(user => {
                setClickedUser(user);
                setIsLoading(false);
            });
    }, [])

    return (
        <div className='modals'>
            <Modal.Dialog>

                {
                    (isLoading) ?
                        <div className='spinner-box'><Spinner /></div> :
                        <ModalDetail onModelClose={props.onModelClose} onDeleteUser={props.onDeleteUser} userDetails={clickedUser} />
                }

            </Modal.Dialog>
        </div>
    );
}

export default DetailUser;