import { Tuser } from "@/components/userDashBoard/ProfileSetting";
import { useCurrentToken } from "@/Redux/Features/Auth/AuthSlice";
import { useAppSelector } from "@/Redux/hooks";
import { jwtDecode } from "jwt-decode";

export const User = () => {
    const token = useAppSelector(useCurrentToken);

    let user;
    if (token) {
        user = jwtDecode(token) 
    }

    const {email, role, id} = user as Tuser
    
    return {email, role, id}
}