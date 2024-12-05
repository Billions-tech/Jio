import Card from "../components/Card";

const Rooms = () => {
  const rooms = [
    {
      title: "Deluxe Room",
      description: "Spacious and luxurious.",
      image: "/assets/room.jpeg",
    },
    {
      title: "Suite",
      description: "For the ultimate comfort.",
      image: "/assets/fum.jpeg",
    },
    {
      title: "Standard Room",
      description: "Cozy and affordable.",
      image: "/assets/rom.jpeg",
    },
  ];

  return (
    <div className="container mx-auto  my-12">
      <h1 className="section-heading">Our Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 mt-8">
        {rooms.map((room, index) => (
          <Card key={index} {...room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
