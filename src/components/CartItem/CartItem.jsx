import PropTypes from 'prop-types';

const CartItem = ({course}) => {
    console.log(course)
    return (
            <li>{course}</li>
    );
};

CartItem.propTypes = {
    course: PropTypes.object.isRequired
}

export default CartItem;