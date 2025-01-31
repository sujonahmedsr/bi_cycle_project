/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { useAddProductMutation } from "@/Redux/Features/Product/ProductApi"
import { toast } from "sonner"
const formSchema = z.object({
    name: z.string({ required_error: "name is required." }),
    image: z.string({ required_error: "image is required." }),
    description: z.string({ required_error: "description is required." }),
    brand: z.string({ required_error: "brand is required." }),
    price: z.string({ required_error: "price is required." }),
    quantity: z.string({ required_error: "quantity is required." }),
    type: z.string({ required_error: "type is required." }),
});
const AddProduct = () => {
    const [addProducts] = useAddProductMutation()
    const [open, setOpen] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    const { reset } = form

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Loading...")
        try {
            const res = await addProducts(data)
            if (res?.error) {
                toast.error((res?.error as any)?.error || "Something went wrong", { id: toastId })
            } else {
                toast.success("Product Added Successfull...", { id: toastId })
                reset()
                setOpen(!open)
            }

        } catch (error) {
            toast.error('Failed to Add Product. Please try again.')
        }
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div onClick={() => setOpen(!open)}>
                    <Button className="bg-blue-600 hover:bg-blue-700 rounded">Add Product</Button>
                </div>
            </DialogTrigger>
            <DialogContent aria-describedby={undefined} className="sm:max-w-[425px]">
                <DialogTitle className="sr-only">Add Products</DialogTitle>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 max-w-md mx-auto w-full">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field, fieldState: { error } }) => (
                                <FormItem>
                                    <FormLabel>Product Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Product name" {...field} value={field.value || ''} />
                                    </FormControl>
                                    {
                                        error && <p className="text-red-500">{error.message}</p>
                                    }
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field, fieldState: { error } }) => (
                                <FormItem>
                                    <FormLabel>Product Image</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Product image" {...field} value={field.value || ''} />
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
                            name="type"
                            render={({ field, fieldState: { error } }) => (
                                <FormItem>
                                    <FormLabel>Product Type</FormLabel>
                                    <FormControl className="w-full">
                                        <Select

                                            value={field.value || ''} // Use field.value for controlled behavior
                                            onValueChange={field.onChange} // Update form state
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a Type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="Mountain">Mountain</SelectItem>
                                                    <SelectItem value="Road">Road</SelectItem>
                                                    <SelectItem value="Hybrid">Hybrid</SelectItem>
                                                    <SelectItem value="BMX">BMX</SelectItem>
                                                    <SelectItem value="Electric">Electric</SelectItem>
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

                        <FormField
                            control={form.control}
                            name="brand"
                            render={({ field, fieldState: { error } }) => (
                                <FormItem>
                                    <FormLabel>Product Brand</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Product brand" {...field} value={field.value || ''} />
                                    </FormControl>
                                    {
                                        error && <p className="text-red-500">{error.message}</p>
                                    }
                                </FormItem>
                            )}
                        />
                        <div className="flex gap-4 justify-between items-center">
                            <FormField
                                control={form.control}
                                name="price"
                                render={({ field, fieldState: { error } }) => (
                                    <FormItem>
                                        <FormLabel>Product Price</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="Product price" {...field} value={field.value || ''} />
                                        </FormControl>
                                        {
                                            error && <p className="text-red-500">{error.message}</p>
                                        }
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="quantity"
                                render={({ field, fieldState: { error } }) => (
                                    <FormItem>
                                        <FormLabel>Product Quantity</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="Product quantity" {...field} value={field.value || ''} />
                                        </FormControl>
                                        {
                                            error && <p className="text-red-500">{error.message}</p>
                                        }
                                    </FormItem>
                                )}
                            />
                        </div>

                        <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded">Add Product</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default AddProduct;