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
import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
    const user = true
    return (
        <section className="p-4 border-b bg-white sticky top-0 z-10">
            <div className="container mx-auto">
                <nav className="hidden justify-between items-center lg:flex">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Link to={'/'}>
                                <h1 className="text-2xl font-bold">Bi_Cycle</h1>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Link
                            className={cn(
                                "text-muted-foreground",
                                navigationMenuTriggerStyle,
                                buttonVariants({
                                    variant: "ghost",
                                }),
                            )}
                            to={'/'}
                        >
                            Home
                        </Link>

                        <Link
                            className={cn(
                                "text-muted-foreground",
                                navigationMenuTriggerStyle,
                                buttonVariants({
                                    variant: "ghost",
                                }),
                            )}
                            to={'/about'}
                        >
                            About Us
                        </Link>
                        <Link
                            className={cn(
                                "text-muted-foreground",
                                navigationMenuTriggerStyle,
                                buttonVariants({
                                    variant: "ghost",
                                }),
                            )}
                            to={'/contact'}
                        >
                            Contact Us
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <LuSearch className="text-xl" />
                        <LuShoppingCart className="text-xl" />
                        {
                            user ? <FaUser className="text-xl" />
                                :
                                <Link to={'/login'}>
                                    <Button variant="outline">
                                        Log in
                                    </Button>
                                </Link>
                        }

                    </div>
                </nav>
                <div className="block lg:hidden">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-semibold">Bi_Cycle</span>
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
                                            <span className="text-lg font-semibold">Bi_Cycle</span>
                                        </div>
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="mb-6 mt-6 flex flex-col gap-4">
                                    <a href="#" className="font-semibold">
                                        Home
                                    </a>
                                    <a href="#" className="font-semibold">
                                        Pricing
                                    </a>
                                    <a href="#" className="font-semibold">
                                        Blog
                                    </a>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Button variant="outline">Log in</Button>
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
