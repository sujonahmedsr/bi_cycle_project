import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAppDispatch } from "@/Redux/hooks";
import { FaUser } from "react-icons/fa";
import { logout } from "@/Redux/Features/Auth/AuthSlice";
import { toast } from "sonner";
import { useLogoutMutation } from "@/Redux/Features/Auth/AuthApi";
import { Link } from "react-router-dom";

const ProfileDropDown = () => {
    const dispatch = useAppDispatch()
    const [logoutDb] = useLogoutMutation()
    const handleLogout = async () => {
        await dispatch(logout())
        await logoutDb(undefined)
        toast.success("Log Out Ok...")
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <FaUser className="text-2xl hover:text-blue-600 duration-300 ring-transparent" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-5 w-60 mr-5">
                {/* <DropdownMenuItem>
                    <Button variant={"ghost"} className="w-full ">
                        My Profile
                    </Button>
                </DropdownMenuItem> */}
                <DropdownMenuItem>
                    <Link to={'/userDashboard'} className="w-full">
                        <Button variant={"ghost"} className="w-full ">
                            User Dashboard
                        </Button>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Button onClick={handleLogout} variant={"outline"} className="w-full hover:bg-blue-600 hover:text-white">
                        Log Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProfileDropDown;