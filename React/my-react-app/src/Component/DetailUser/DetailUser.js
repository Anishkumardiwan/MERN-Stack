import { Modal, Button } from 'react-bootstrap';
import './DetailUser.css';

function DetailUser(props) {
    const userAddress = props.userDetails.location.street + ' ' + props.userDetails.location.city + ' ' + props.userDetails.location.state + ' ' + props.userDetails.location.country;
    return (
        <div className='modals'>
            <Modal.Dialog>
                <Modal.Header closeButton onClick={props.onModelClose}>
                    <Modal.Title><b>ID:</b> {props.userDetails.id} </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="modal-row">
                        <div className="left-col">
                            <div className='image-box'>
                                <img src={props.userDetails.picture} alt="" />
                            </div>
                            <p>{props.userDetails.firstName + ' ' + props.userDetails.lastName}</p>
                        </div>

                        <div className="right-col">
                            <p><b>Gender:</b> {props.userDetails.gender}</p>
                            <p><b>Email:</b> {props.userDetails.email}</p>
                            <p><b>Phone:</b> {props.userDetails.phone}</p>
                            <p><b>Address:</b> {userAddress}</p>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="info">Edit</Button>
                    <Button onClick={() => props.onDeleteUser(props.userDetails)} variant="danger">Delete</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default DetailUser;