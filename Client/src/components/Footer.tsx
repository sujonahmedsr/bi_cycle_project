import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdBicycle } from "react-icons/io";
import { Link } from "react-router-dom";

const sections = [
    {
        title: "Product",
        links: [
            { name: "Overview", href: "#" },
            { name: "Pricing", href: "#" },
            { name: "Marketplace", href: "#" },
            { name: "Features", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About", href: "#" },
            { name: "Team", href: "#" },
            { name: "Blog", href: "#" },
            { name: "Careers", href: "#" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Help", href: "#" },
            { name: "Sales", href: "#" },
            { name: "Advertise", href: "#" },
            { name: "Privacy", href: "#" },
        ],
    },
];

const Footer = () => {
    return (
        <section className="py-10 border-t mt-10 bg-blue-50 p-4">
            <div className="container mx-auto">
                <footer>
                    <div className="flex flex-col items-center text-center lg:flex-row">
                        <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
                            <div>
                                <Link to={'/'} className="text-2xl font-bold flex items-center gap-2">
                                    <IoMdBicycle className="text-3xl text-blue-600" />
                                    <h1>Cycle<span className="text-blue-600">_Labs</span></h1>
                                </Link>
                                <p className="mt-6 text-sm text-muted-foreground text-start">

                                    Cycle_Labs – Your trusted bicycle shop! We offer high-quality bicycles, accessories, and repair services for everyone. 🚴‍♂️💨

                                    📍 Premium Quality | 🔧 Reliable Service | 🎯 Your Needs, Our Priority
                                </p>
                            </div>
                            <ul className="flex items-center space-x-6 text-muted-foreground">
                                <li className="font-medium hover:text-primary">
                                    <a href="#">
                                        <FaInstagram className="size-6" />
                                    </a>
                                </li>
                                <li className="font-medium hover:text-primary">
                                    <a href="#">
                                        <FaFacebook className="size-6" />
                                    </a>
                                </li>
                                <li className="font-medium hover:text-primary">
                                    <a href="#">
                                        <FaTwitter className="size-6" />
                                    </a>
                                </li>
                                <li className="font-medium hover:text-primary">
                                    <a href="#">
                                        <FaLinkedin className="size-6" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-3 gap-6 w-full">
                            {sections.map((section, sectionIdx) => (
                                <div key={sectionIdx}>
                                    <h3 className="mb-6 font-bold">{section.title}</h3>
                                    <ul className="space-y-4 text-sm text-muted-foreground">
                                        {section.links.map((link, linkIdx) => (
                                            <li
                                                key={linkIdx}
                                                className="font-medium hover:text-primary"
                                            >
                                                <a href={link.href}>{link.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
                        <p>© 2024 Shadcnblocks. All rights reserved.</p>
                        <ul className="flex justify-center gap-4 lg:justify-start">
                            <li className="hover:text-primary">
                                <a href="#"> Terms and Conditions</a>
                            </li>
                            <li className="hover:text-primary">
                                <a href="#"> Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Footer;
