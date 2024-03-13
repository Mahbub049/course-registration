const Course = ({course}) => {
    const {photo, name, description, credit, price} = course;
    return (
        <>
            <div className="w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div>
                    <div>
                        <p>{price}</p>
                    </div>
                    <div>
                        <p>{credit}</p>
                    </div>
                </div>
                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </>
    );
};

export default Course;