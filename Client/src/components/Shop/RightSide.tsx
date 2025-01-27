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

const RightSide = () => {
    return (
        <div>
            <div className="flex md:flex-row flex-col gap-2 items-center justify-between">
                <Input type="text" placeholder="Search your bi_cycle" className="md:w-2/5 w-full" />
                <Select>
                    <SelectTrigger className="md:w-[180px] w-full">
                        <SelectValue placeholder="Sort By " />
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
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 py-5">
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