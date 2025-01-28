
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

const Cycle = () => {
  return (
    <Card className="hover:border-blue-300">
      <CardHeader>
        <img src={cycle1} alt="testing image" />
      </CardHeader>
      <CardContent className="space-y-3">
        <CardTitle>Create project Cycle</CardTitle>
        <CardDescription>Price: $120</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant={"outline"} className="w-full rounded hover:bg-blue-600 hover:text-white duration-200">View Details</Button>
      </CardFooter>
    </Card>
  )
}

export default Cycle