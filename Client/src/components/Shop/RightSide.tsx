/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useAllProductsQuery } from "@/Redux/Features/Product/ProductApi";
import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useState } from "react";

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
    _id: string,
}

const RightSide = () => {
    const [sortOption, setSortOption] = useState('');
    const [search, setSearch] = useState('')
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(10000); // Default max price


    // const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const { data: allProducts, isLoading, isError } = useAllProductsQuery(undefined)

    const searchFunc = (item: any) => {
        return search.toLowerCase() === '' ? item : item?.name?.toLowerCase()?.includes(search) || item?.brand?.toLowerCase()?.includes(search) || item?.description?.toLowerCase()?.includes(search) || item?.type?.toLowerCase()?.includes(search)
    }

    const sortProducts = (a: Tproduct, b: Tproduct) => {
        if (sortOption === "low_to_high") {
            return a.price - b.price; // Sort by price (ascending)
        } else if (sortOption === "high_to_low") {
            return b.price - a.price; // Sort by price (descending)
        } else if (sortOption === "old_product") {
            return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(); // Sort by oldest product
        } else if (sortOption === "latest_product") {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(); // Sort by newest product
        }
    }

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
        content = allProducts?.data?.
            filter(searchFunc)
            ?.sort(sortProducts)
            // filter((item) => (selectedBrand ? item.brand === selectedBrand : true)) 
            ?.filter((item: Tproduct) => (selectedType ? item.type === selectedType : true))
            ?.filter((item: Tproduct) => item.price >= minPrice && item.price <= maxPrice) // Price filter
            ?.map((item: Tproduct, index: number) => <Cycle key={index} item={item} />)
    }

    // Extract product prices
    const prices = allProducts?.data?.map((item: Tproduct) => item?.price) || [];
    const minProductPrice = Math.min(...prices);
    const maxProductPrice = Math.max(...prices);

    // Update state when data loads
    useEffect(() => {
        if (prices.length > 0) {
            setMinPrice(minProductPrice);
            setMaxPrice(maxProductPrice);
        }
    }, [allProducts, maxProductPrice, minProductPrice, prices.length]);

    // const brands = Array.from(new Set(allProducts?.data?.map((item: Tproduct) => item?.brand)));

    const types: string[] = Array.from(new Set(allProducts?.data?.map((item: Tproduct) => item?.type)));

    return (
        <div>
            <div className="flex md:flex-row flex-col md:gap-5 gap-3 items-center justify-between">
                <Input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search your bi_cycle" className="md:w-1/2 w-full" />
                <Select onValueChange={(value) => setSortOption(value)}>
                    <SelectTrigger className="md:w-[360px] w-full">
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
                {/* <Select onValueChange={(value) => setSelectedBrand(value)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Sort By Brand" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {
                                brands?.map(brand => <SelectItem value={brand}>{brand}</SelectItem>)
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select> */}
                <Select onValueChange={(value) => setSelectedType(value)}>
                    <SelectTrigger className="md:w-[360px] w-full">
                        <SelectValue placeholder="Sort By Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {
                                types?.map((brand, index) => <SelectItem key={index} value={brand}>{brand}</SelectItem>)
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {/* Price Range Filter */}

                <div className="flex items-center space-x-4">
                    <input
                        type="number"
                        value={minPrice}
                        min={minProductPrice}
                        max={maxProductPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                        className="border p-2 rounded w-24"
                    />
                    <span>-</span>
                    <input
                        type="number"
                        value={maxPrice}
                        min={minProductPrice}
                        max={maxProductPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className="border p-2 rounded w-24"
                    />
                </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 py-5">
                {
                    content
                }
            </div>
        </div>
    );
};

export default RightSide;