import NotificationIcon from '../../assets/notification-icon.svg'
import './index.css'
function NotificationButton() {
    return (
        <div className='dsmeta-red-btn'>
            <button><img src={NotificationIcon} ></img></button>
        </div>
    );
}
export default NotificationButton;