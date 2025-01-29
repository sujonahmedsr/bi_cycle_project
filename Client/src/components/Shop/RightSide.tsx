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
import { useAllProductsQuery } from "@/Redux/Features/Product/ProductApi";
import { Skeleton } from "@/components/ui/skeleton"

export type Tproduct = {
    brand: string
    createdAt: string
    description: string
    inStock: boolean
    name: string
    price: number
    quantity: number
    type: string
    updatedAt: string
    _id: string
}

const RightSide = () => {
    const { data: allProducts, isLoading, isError } = useAllProductsQuery(undefined)
    let content;

    if (isLoading && !isError) {
        content = <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    }
    if (!isLoading && isError) {
        content = <div>
            <h1 className="text-red-600 font-semibold">Something went wrong...</h1>
        </div>
    }
    if (!isLoading && !isError && allProducts?.data?.length === 0) {
        content = <div>
            <h1 className="text-red-600 font-semibold">No product found...</h1>
        </div>
    }
    if (!isLoading && !isError && allProducts?.data?.length > 0) {
        content = allProducts?.data?.map((item: Tproduct, index: number) => <Cycle key={index} item={item} />)
    }

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
                {/* {content} */}
                {
                    content
                }
            </div>
        </div>
    );
};

export default RightSide;