import { FaDollarSign } from "react-icons/fa6";
import { BsBook } from "react-icons/bs";

const Course = ({course}) => {
    const {photo, name, description, credit, price} = course;
    return (
        <>
            <div className="w-96 bg-base-100 shadow-xl">
            <figure className="px-6 pt-10 w-full">
                <img src={photo} alt="Shoes" className="rounded-xl w-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="flex justify-between mt-2 mb-5">
                    <div className="flex items-center gap-3">
                        <FaDollarSign />
                        <p>{price}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <BsBook />
                        <p>{credit}</p>
                    </div>
                </div>
                <div className="card-actions">
                <button className="btn bg-[#2F80ED] text-lg font-semibold text-white w-full">Buy Now</button>
                </div>
            </div>
            </div>
        </>
    );
};

export default Course;