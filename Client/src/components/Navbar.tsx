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


const Navbar = () => {
    return (
        <section className="py-4 border-b bg-white">
            <div className="container mx-auto">
                <nav className="hidden justify-between items-center lg:flex">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold">Bi_Cycle</span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <a
                            className={cn(
                                "text-muted-foreground",
                                navigationMenuTriggerStyle,
                                buttonVariants({
                                    variant: "ghost",
                                }),
                            )}
                            href="#"
                        >
                            Home
                        </a>

                        <a
                            className={cn(
                                "text-muted-foreground",
                                navigationMenuTriggerStyle,
                                buttonVariants({
                                    variant: "ghost",
                                }),
                            )}
                            href="#"
                        >
                            Pricing
                        </a>
                        <a
                            className={cn(
                                "text-muted-foreground",
                                navigationMenuTriggerStyle,
                                buttonVariants({
                                    variant: "ghost",
                                }),
                            )}
                            href="#"
                        >
                            Blog
                        </a>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                            Log in
                        </Button>
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
