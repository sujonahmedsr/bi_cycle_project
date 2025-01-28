import { useUserQuery } from "@/Redux/Features/Auth/AuthApi";
import { useCurrentToken } from "@/Redux/Features/Auth/AuthSlice";
import { useAppSelector } from "@/Redux/hooks";
import { jwtDecode, JwtPayload } from "jwt-decode";

const ProfileSetting = () => {
    const token = useAppSelector(useCurrentToken)
        let user;
        if (token) {
            user = jwtDecode(token)
        }
        const {data: userData} = useUserQuery(user?.id) 
    return (
        <div>
            Profile setting
        </div>
    );
};

export default ProfileSetting;