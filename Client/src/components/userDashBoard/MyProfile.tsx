import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useCurrentToken } from "@/Redux/Features/Auth/AuthSlice";
import { useAppSelector } from "@/Redux/hooks";
import { jwtDecode } from "jwt-decode";
import { Tuser } from "./ProfileSetting";
import { useUserQuery } from "@/Redux/Features/Auth/AuthApi";
import userprofile from "@/assets/dummy.png"
import { Link } from "react-router-dom";
import { IoMdBicycle } from "react-icons/io";
const MyProfile = () => {
  const token = useAppSelector(useCurrentToken)
  let user;
  if (token) {
    user = jwtDecode(token) as Tuser
  }
  const { data: userData } = useUserQuery(user?.id)
  const profile = userData?.data
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <p className="flex items-center gap-2 max-w-4xl px-8 font-medium lg:text-3xl">
            &ldquo;Welcome to <Link to={'/'} className="font-bold flex items-center gap-2">
              <IoMdBicycle className="text-3xl text-blue-600" />
              <h1>Cycle<span className="text-blue-600">_Labs</span></h1>
            </Link>&rdquo;
          </p>
          <p className="mb-16 flex items-center gap-2 max-w-4xl px-8 font-medium lg:text-3xl">
            &ldquo;Thank you for joining Cycle Labs! 🚀 Manage your profile effortlessly and stay updated with new features. Your cycling experience just got smarter and smoother!&rdquo;
          </p>
          <div className="flex items-center gap-2 md:gap-4">
            <Avatar className="size-12 md:size-16">
              <AvatarImage src={profile?.image || userprofile} />
              <AvatarFallback>Customer Name</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="font-semibold">Customer Name</p>
              <p className="text-2xl font-semibold">{profile?.name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;