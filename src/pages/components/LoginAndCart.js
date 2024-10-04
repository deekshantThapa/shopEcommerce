import { useContext } from 'react';
import cartIcon from '../../assets/icons/cart-icon.png';
import profileIcon from '../../assets/icons/profile-icon.png';
import { CartContext } from './CartContext';

export default function LoginAndCart(){

    const {cartItems} = useContext(CartContext);

    return(
        <div className="login-and-cart">
            <div className="cart">
                <span className="cart-icon">
                    <img src={cartIcon} alt="" />
                </span>
                <div className="cart-basket">
                    {cartItems.length > 0 ? (
                        <>
                            {cartItems.map((item, index) => (
                                <div className="basket-item" key={index}>
                                    <figure className="item-image">
                                        <img src={item.imageUrl} alt="" />
                                    </figure>
                                    <div className="item-detail-short">
                                        <h6>{item.title}</h6>
                                        <span>${item.discountedPrice}</span>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <p>Your cart is empty</p>
                    )}
                </div>
            </div>
            <span className="profile">
                <img src={profileIcon} alt="" />
            </span>
        </div>
    )
}