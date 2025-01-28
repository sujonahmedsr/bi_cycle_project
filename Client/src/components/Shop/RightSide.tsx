import { Input } from "../ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Cycle from "./Cycle";
import SmallDeviceFiltering from "./SmallDeviceFiltering";

const RightSide = () => {
    return (
        <div>
            <div className="flex md:flex-row flex-col gap-5 items-center justify-between">
                <Input type="text" placeholder="Search your bi_cycle" className="md:w-1/2 w-full" />
                <div className="flex items-center justify-between gap-5">
                    <Select>
                        <SelectTrigger className="w-[190px]">
                            <SelectValue placeholder="Sort By" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="latest_product">Latest Product</SelectItem>
                                <SelectItem value="old_product">Old Product</SelectItem>
                                <SelectItem value="low_to_high">Low To High Price</SelectItem>
                                <SelectItem value="high_to_low">High To Low Price</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <SmallDeviceFiltering />
                </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-5">
                <Cycle />
                <Cycle />
                <Cycle />
                <Cycle />
                <Cycle />
                <Cycle />
                <Cycle />
                <Cycle />
                <Cycle />
                <Cycle />
            </div>
        </div>
    );
};

export default RightSide;