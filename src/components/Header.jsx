function Header({ title }) {
  return (
    <div className="flex justify-center">
      <div className="h-16 mt-2 w-full p-4 flex text-2xl font-semibold">
        {title}
      </div>
    </div>
  );
}

export default Header;
