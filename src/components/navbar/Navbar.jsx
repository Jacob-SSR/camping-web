import DropdownListManu from "./DropdownListManu";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

function Navbar() {
  return (
    <nav>
      <div className="flex flex-col items-center py-4 gap-4 justify-between sm:flex-row">
        <Logo />
        <Searchbar />
        <DropdownListManu />
      </div>
    </nav>
  );
}
export default Navbar;
