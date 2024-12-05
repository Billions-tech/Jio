const Card = ({ image, title, description }) => {
  return (
    <div className="bg-yellow-100 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      {image && (
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transform transition duration-300 hover:scale-110"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl text-yellow-800 font-bold">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
