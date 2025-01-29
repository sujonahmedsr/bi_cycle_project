import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react"
const formSchema = z.object({
    title: z.string({ required_error: "Title is required." }),
    description: z.string({ required_error: "Description is required." }),
    priority: z.string({ required_error: "Priority is required." }),
    // dueDate: z.date({ required_error: "Due Date is required." }),
    // isCompleted: z.boolean().optional(),
});
const AddProduct = () => {
    const [open, setOpen] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data);
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div onClick={() => setOpen(!open)}>
                    <Button className="bg-blue-600 hover:bg-blue-700 rounded">Add Task</Button>
                </div>
            </DialogTrigger>
            <DialogContent aria-describedby={undefined} className="sm:max-w-[425px]">
                <DialogTitle>Add Task</DialogTitle>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 max-w-md mx-auto w-full">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field, fieldState: { error } }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Title" {...field} value={field.value || ''} />
                                    </FormControl>
                                    {
                                        error && <p className="text-red-500">{error.message}</p>
                                    }
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field, fieldState: { error } }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            id="description-dialog" // Set the ID to match `aria-describedby`
                                            placeholder="Enter description"
                                            {...field}
                                            value={field.value || ''}
                                        />
                                    </FormControl>
                                    {
                                        error && <p className="text-red-500">{error.message}</p>
                                    }
                                </FormItem>
                            )}
                        />

                        <FormField
                                control={form.control}
                                name="priority"
                                render={({ field, fieldState: { error } }) => (
                                    <FormItem>
                                        <FormLabel>Priority</FormLabel>
                                        <FormControl>
                                            <Select
                                                value={field.value || ''} // Use field.value for controlled behavior
                                                onValueChange={field.onChange} // Update form state
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select a Priority" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="low">Low</SelectItem>
                                                        <SelectItem value="medium">Medium</SelectItem>
                                                        <SelectItem value="high">High</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        {
                                            error && <p className="text-red-500">{error.message}</p>
                                        }
                                    </FormItem>
                                )}
                            />

                        {/* <FormField
                                control={form.control}
                                name="isCompleted"
                                render={({ field, fieldState: { error } }) => (
                                    <FormItem>
                                        <FormLabel>Is Completed</FormLabel>
                                        <FormControl>
                                            <Select
                                                value={field.value !== null ? String(field.value) : undefined} // Use field.value for controlled behavior
                                                onValueChange={(value) => field.onChange(value === "true")} // Update form state
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select a fruit" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value={"true"}>Yes</SelectItem>
                                                        <SelectItem value={"false"}>No</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        {
                                            error && <p className="text-red-500">{error.message}</p>
                                        }
                                    </FormItem>
                                )}
                            /> */}

                        {/* <FormField
                                control={form.control}
                                name="dueDate"
                                render={({ field, fieldState: { error } }) => (
                                    <FormItem>
                                        <FormLabel>Due Date</FormLabel>
                                        <FormControl>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button

                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full justify-start text-left font-normal",
                                                        )}
                                                    >
                                                        <CalendarIcon />
                                                        {field.value
                                                            ? format(field.value, "PPP")
                                                            : <span>Pick a date</span>}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={date || field.value || undefined}
                                                        onSelect={(selectedDate) => field.onChange(selectedDate)}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </FormControl>
                                        {
                                            error && <p className="text-red-500">{error.message}</p>
                                        }
                                    </FormItem>
                                )}
                            /> */}

                        <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded">Create Task</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default AddProduct;