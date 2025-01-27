import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Checkbox } from "@/components/ui/checkbox"

type SliderProps = React.ComponentProps<typeof Slider>
const LeftSide = ({ className, ...props }: SliderProps) => {
    return (
        <Card className="p-5 rounded sticky top-20">
            <div className="flex flex-col gap-10">
                <div className="space-y-5">
                    <h1 className="text-xl font-semibold">Price Range</h1>
                    <Slider
                        defaultValue={[50]}
                        max={100}
                        step={1}
                        className={cn("w-full", className)}
                        {...props}
                    />
                </div>
                <div className="space-y-5">
                    <h1 className="text-xl font-semibold">Brand</h1>
                    <div className="space-y-5">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms">Accept terms and conditions</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms">conditions</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms">Accept terms </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms">Accept conditions</Label>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default LeftSide;