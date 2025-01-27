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
import { FaUser } from "react-icons/fa";
import { IoMdBicycle } from "react-icons/io";

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
    
    const user = false


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
                    <div className="flex items-center gap-4">
                        <LuSearch className="text-xl" />
                        <LuShoppingCart className="text-xl" />
                        {
                            user ? <FaUser className="text-xl hover:text-blue-600 duration-300" />
                                :
                                <Link to={'/login'}>
                                    <Button className="bg-blue-600 hover:bg-blue-700 rounded">
                                        Log in
                                    </Button>
                                </Link>
                        }

                    </div>
                </nav>
                <div className="block lg:hidden">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Link to={'/'} className="text-2xl font-bold flex items-center gap-2">
                                <IoMdBicycle className="text-3xl text-blue-600" />
                                <h1>Cycle<span className="text-blue-600">_Labs</span></h1>
                            </Link>
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
                                            <Link to={'/'} className="text-2xl font-bold flex items-center gap-2">
                                                <IoMdBicycle className="text-3xl text-blue-600" />
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
                                <div className="flex flex-col gap-3">
                                    <Button className="bg-blue-600 hover:bg-blue-700 rounded">Log in</Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
