
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import cycle1 from "@/assets/cycle/bike.png"
import { Link } from "react-router-dom"
import { Tproduct } from "./RightSide"
import { FaHeart } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useAppDispatch } from "@/Redux/hooks"
import { addCard } from "@/Redux/Features/Product/ProductSlice"

const Cycle = ({ item }: { item: Tproduct }) => {
  const { _id, brand, name, price } = item
  const dispatch = useAppDispatch()

  const handleAddtoCart = () => {
    dispatch(addCard(item))
  }

  return (
    <Link to={`/viewDetails/${_id}`}>
      <Card className="hover:border-blue-300">
        <CardHeader className="relative">
          <img src={cycle1} alt="testing image" />
          <div className="absolute top-4 right-4 ">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button onClick={handleAddtoCart} variant="outline" className="text-blue-600 hover:text-blue-700"><FaHeart /></Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add To Cart</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardHeader>
        <CardContent className="space-y-1">
          <CardTitle className="text-base">{name}</CardTitle>
          <CardTitle className="text-sm text-gray-600">Brand: {brand}</CardTitle>
          <CardDescription className="text-lg font-semibold text-gray-700">Price: ${price}</CardDescription>
        </CardContent>
        <CardFooter>
          <Link to={`/viewDetails/${_id}`} className="w-full">
            <Button variant={"outline"} className="w-full rounded hover:bg-blue-600 hover:text-white duration-200">View Details</Button>
          </Link>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default Cycle