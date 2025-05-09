
const ProfileCard = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 mb-4">
      <div className="h-24 bg-blue-600 p-4 relative">
        <div className="absolute bottom-0 left-4 transform translate-y-1/2 flex">
          <div className="bg-white rounded-full overflow-hidden border-4 border-white">
            <div className="w-20 h-20 grid grid-cols-2 grid-rows-2">
              <div className="bg-blue-500"></div>
              <div className="bg-black"></div>
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-white left-1/2 top-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              <div className="bg-black"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-12 p-4">
        <h2 className="font-space font-bold text-2xl">Saksham Budhii</h2>
        <p className="text-gray-600 font-sanchez">Designation</p>
        <p className="text-blue-primary">Location, Locality</p>
      </div>
    </div>
  );
};

export default ProfileCard;
