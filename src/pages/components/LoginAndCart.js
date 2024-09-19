import cartIcon from '../../assets/icons/cart-icon.png';
import profileIcon from '../../assets/icons/profile-icon.png';

export default function LoginAndCart(){
    return(
        <div className="login-and-cart">
            <span className="login">
                <img src={cartIcon} alt="" />
            </span>
            <span className="profile">
                <img src={profileIcon} alt="" />
            </span>
        </div>
    )
}