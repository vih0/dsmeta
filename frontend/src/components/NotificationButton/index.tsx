import NotificationIcon from '../../assets/NotificationIcon.svg'
import './style.css'
function NotificationButton() {
  return (
    <div className="dsmeta-red-btn-container">
      <button className="dsmeta-red-btn">
        <img src={NotificationIcon} alt="Notificar" />
      </button>
    </div>
  );
}
export default NotificationButton;
