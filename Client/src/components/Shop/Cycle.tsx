
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import cycle1 from "../../assets/cycle/bike.png"

const Cycle = () => {
  return (
    <Card>
      <CardHeader>
        <img src={cycle1} alt="testing image" />
      </CardHeader>
      <CardContent>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}

export default Cycle