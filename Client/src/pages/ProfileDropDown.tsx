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
            <DropdownMenuContent className="mt-5 w-48">
                <DropdownMenuItem>My Profile</DropdownMenuItem>
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
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