function Header({ title }) {
  return (
    <div className="flex justify-center">
      <div className="h-16 w-80 flex items-center  text-2xl font-semibold">
        {title}
      </div>
    </div>
  );
}

export default Header;
