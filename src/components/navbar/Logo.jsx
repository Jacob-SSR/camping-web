import { Link } from "react-router";
import { Button } from "../ui/button";

function Logo() {
  return (
    <Button asChild>
      <Link to="/">Logo </Link>
    </Button>
  );
}
export default Logo;
