
import './Main.css';
import UserList from '../UserList/UserList';

const Main = () => {
    return (
        <div className='main'>
            <div className='search-box'></div>
            <div>
            <UserList />
            </div>
        </div>
    )
}

export default Main;