
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

const Cycle = ({item}: {item: Tproduct}) => {
  const {brand,name, price} = item
  
  return (
    <Card className="hover:border-blue-300">
      <CardHeader>
        <img src={cycle1} alt="testing image" />
      </CardHeader>
      <CardContent className="space-y-1">
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardTitle className="text-base text-gray-600">Brand: {brand}</CardTitle>
        <CardDescription>Price: ${price}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link to={'/viewDetails'} className="w-full">
          <Button variant={"outline"} className="w-full rounded hover:bg-blue-600 hover:text-white duration-200">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default Cycle