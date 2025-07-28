import { useLocation } from "react-router-dom";

const BookingsCart = ({ booking, handleDelete, handleConfirm }) => {
    const { _id, title, img, price, date, status,quantity } = booking;
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="w-24 h-24 rounded-xl">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>{title}</td>
            <td>{price}</td>
            <td>{date}</td>
            <td>{quantity}</td>
            <th>
                {
                    status === 'confirm' ? <span className="font-bold text-primary">Confirm</span>
                        : <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingsCart;