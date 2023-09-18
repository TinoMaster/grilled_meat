export const Nabvar = () => {
  return (
    <div className="flex justify-center items-center absolute text-white z-10 w-full h-32">
      <div className="flex w-11/12 max-w-720p justify-between items-center">
        {/* Logo */}
        <div className="text-2xl">Noah</div>
        {/* Links */}
        <div className="flex gap-3 text-lg">
          <p>Home</p>
          <p>Menu</p>
          <p>Photos</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};
