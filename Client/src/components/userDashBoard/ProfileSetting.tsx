import { useUserQuery } from "@/Redux/Features/Auth/AuthApi";
import { useCurrentToken } from "@/Redux/Features/Auth/AuthSlice";
import { useAppSelector } from "@/Redux/hooks";
import { jwtDecode } from "jwt-decode";

export type Tuser = {
    email: string,
    role: string,
    id: string
}

const ProfileSetting = () => {
    const token = useAppSelector(useCurrentToken)
        let user;
        if (token) {
            user = jwtDecode(token) as Tuser
        }
        const {data: userData} = useUserQuery(user?.id) 
        console.log(userData);
        
    return (
        <div>
            Profile setting
        </div>
    );
};

export default ProfileSetting;