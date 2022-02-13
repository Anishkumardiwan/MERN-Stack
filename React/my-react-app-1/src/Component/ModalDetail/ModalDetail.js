import { Modal, Button } from 'react-bootstrap';

const ModalDetail = (props) => {

    // console.log(props);

    const {id , picture , firstName , lastName , gender , email , phone , location} = props.userDetails;
    const userAddress = location.street + ' ' + location.city + ' ' + location.state + ' ' + location.country;

    // console.log(props.userDetails);

    return (
        <>
            <Modal.Header closeButton onClick={props.onModelClose}>
                <Modal.Title><b>ID:</b> {id} </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="modal-row">
                    <div className="left-col">
                        <div className='image-box'>
                            <img src={picture} alt="" />
                        </div>
                        <p>{firstName + ' ' + lastName}</p>
                    </div>

                    <div className="right-col">
                        <p><b>Gender:</b> {gender}</p>
                        <p><b>Email:</b> {email}</p>
                        <p><b>Phone:</b> {phone}</p>
                        <p><b>Address:</b> {userAddress}</p>
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="info">Edit</Button>
                <Button onClick={() => props.onDeleteUser()} variant="danger">Delete</Button>
            </Modal.Footer>
        </>
    );
}

export default ModalDetail;