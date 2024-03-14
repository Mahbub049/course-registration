import CartItem from "../CartItem/CartItem";
import PropTypes from 'prop-types';

const Cart = ({courseList, credit, amount}) => {
    return (
        <div className="p-6">
            <div>
                <p className="text-lg text-[#2F80ED] font-bold">Credit Hour Remaining 7 hr</p>
            </div>
            <hr className="my-4" />
            <div>
                <h3 className="text-xl font-bold mb-6">Course Name</h3>
                <ol className="mb-6 ml-[24px] list-decimal">
                    {
                        courseList.map((course, idx) => <CartItem key={idx} course={course}></CartItem>)
                    }
                </ol>
            </div>
            <hr />
            <h4 className="my-4 font-medium">Total Credit Hour: {credit}</h4>
            <hr />
            <h4 className="mt-4 font-medium">Total Price : {amount} USD</h4>
        </div>
    );
};

Cart.propTypes = {
    courseList: PropTypes.object,
    credit: PropTypes.object,
    amount: PropTypes.object
}

export default Cart;