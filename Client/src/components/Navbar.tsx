import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { IoMdBicycle } from "react-icons/io";
import { useCurrentToken } from "@/Redux/Features/Auth/AuthSlice";
import { useAppSelector } from "@/Redux/hooks";
import { jwtDecode } from "jwt-decode";
import ProfileDropDown from "@/pages/ProfileDropDown";

const navItems = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'All Products',
        link: '/products'
    },
    {
        title: 'About Us',
        link: '/about'
    },
    {
        title: 'Contact Us',
        link: '/contact'
    },
]

const Navbar = () => {
    const locatoin = useLocation()

    const token = useAppSelector(useCurrentToken)
    let user;
    if (token) {
        user = jwtDecode(token)
    }

    const { selectedItems } = useAppSelector(state => state.product)

    return (
        <section className="p-4 border-b bg-white sticky top-0 z-10 transition-all">
            <div className="container mx-auto">
                <nav className="hidden justify-between items-center lg:flex">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Link to={'/'} className="text-2xl font-bold flex items-center gap-2">
                                <IoMdBicycle className="text-3xl text-blue-600" />
                                <h1>Cycle<span className="text-blue-600">_Labs</span></h1>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center">
                        {
                            navItems.map((item, index) => <Link
                                key={index + 1}
                                className={cn(
                                    "text-muted-foreground",
                                    navigationMenuTriggerStyle,
                                    buttonVariants({
                                        variant: "ghost",
                                    }),
                                    `hover:text-blue-600 ${locatoin.pathname === item?.link ? "text-blue-600" : ""}`
                                )}
                                to={item?.link}
                            >
                                {item?.title}
                            </Link>)
                        }
                    </div>
                    <div className="flex items-center gap-5">
                        <Link to={'/products'}>
                            <LuSearch className="text-xl" />
                        </Link>
                        <Link to={'/cart'}>
                            <div className="relative">
                                <LuShoppingCart className="text-xl" />
                                <div className="absolute -top-3 -right-2 text-blue-700">
                                    <p className="font-semibold">{selectedItems > 0 ? selectedItems : null}</p>
                                </div>
                            </div>
                        </Link>
                        {
                            user ? <ProfileDropDown />
                                :
                                <Link to={'/login'}>
                                    <Button variant={"outline"} className="text-blue-700 hover:text-white hover:bg-blue-600 rounded duration-300">
                                        Log in
                                    </Button>
                                </Link>
                        }
                    </div>
                </nav>
                <div className="block lg:hidden">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Link to={'/'} className="text-lg font-bold flex items-center gap-2">
                                <IoMdBicycle className="text-xl text-blue-600" />
                                <h1>Cycle<span className="text-blue-600">_Labs</span></h1>
                            </Link>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-2">
                                <Link to={'/cart'}>
                                    <div className="relative">
                                        <LuShoppingCart className="text-lg" />
                                        <div className="absolute -top-3 -right-2 text-blue-700">
                                            <p className="font-semibold">{selectedItems > 0 ? selectedItems : null}</p>
                                        </div>
                                    </div>
                                </Link>
                                {
                                    user ? <ProfileDropDown />
                                        :
                                        <Link to={'/login'}>
                                            <Button variant={"outline"} className="text-blue-700 hover:text-white hover:bg-blue-600 rounded duration-300">
                                                Log in
                                            </Button>
                                        </Link>
                                }

                            </div>

                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <Menu className="size-4" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent className="overflow-y-auto">
                                    <SheetHeader>
                                        <SheetTitle>
                                            <div className="flex items-center gap-2">
                                                <Link to={'/'} className="text-xl font-bold flex items-center gap-2">
                                                    <IoMdBicycle className="text-xl text-blue-600" />
                                                    <h1>Cycle<span className="text-blue-600">_Labs</span></h1>
                                                </Link>
                                            </div>
                                        </SheetTitle>
                                    </SheetHeader>
                                    <div className="mb-6 mt-6 flex flex-col gap-4">
                                        {
                                            navItems.map((item, index) => <Link
                                                key={index + 1}
                                                className={cn(
                                                    "text-muted-foreground",
                                                    navigationMenuTriggerStyle,
                                                    buttonVariants({
                                                        variant: "ghost",
                                                    }),
                                                    `hover:text-blue-600 ${locatoin.pathname === item?.link ? "text-blue-600" : ""}`
                                                )}
                                                to={item?.link}
                                            >
                                                {item?.title}
                                            </Link>)
                                        }
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
