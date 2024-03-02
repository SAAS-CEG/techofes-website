const Accomodation = () => {
  return (
    <div>
      <div className="h-full lg:min-h-[60vh] min-h-[85vh] pb-11 mt-20 cursor-default bg-g">
        <div className="flex items-center justify-center p-11 text-3xl md:text-5xl text-white font-anta">
          <h1 className="font-anta font-bold">ACCOMODATION</h1>
        </div>

        <div className="flex flex-col justify-center md:p-10 mb-20 bk w-3/5 m-auto p-8">
          <h1 className="font-anta md:text-2xl text-lg ">
            Any troubles on where to stay? We have you covered. We have
            accommodation options to ensure a comfortable and hassle-free
            experience for all of you.
          </h1>
          <h2 className="font-anta md:text-2xl text-lg font-bold mt-16 ">
            WITH FOOD - ₹400
          </h2>
          <h2 className="font-anta md:text-2xl text-lg font-bold mt-6">
            WITHOUT FOOD - ₹250
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Accomodation;
