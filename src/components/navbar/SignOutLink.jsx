import { SignOutButton } from "@clerk/clerk-react";
import { toast } from "sonner";

function SignOutLink() {

  const handleLogout = () => {
    toast("Logout Successfully!!!");
  };
  return (
    <SignOutButton redirectUrl="/">
      <button onClick={handleLogout}> Logout</button>
    </SignOutButton>
  );
}
export default SignOutLink;
