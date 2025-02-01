/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUserQuery } from "@/Redux/Features/Auth/AuthApi";
import { useCurrentToken } from "@/Redux/Features/Auth/AuthSlice";
import { useAppSelector } from "@/Redux/hooks";
import { jwtDecode } from "jwt-decode";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import userprofile from "@/assets/dummy.png"
import { Skeleton } from "@/components/ui/skeleton"
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
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { useUpdateUserProfileMutation } from "@/Redux/Features/User/UserApi";
import axios from "axios";

export type Tuser = {
    email: string | undefined,
    role: string | undefined,
    id: string | undefined
}

const ProfileSetting = () => {
    const [updateProfile] = useUpdateUserProfileMutation()
    const token = useAppSelector(useCurrentToken)
    let user;
    if (token) {
        user = jwtDecode(token) as Tuser
    }
    const { data: userData, isLoading, isError } = useUserQuery(user?.id)
    const profile = userData?.data

    let content;
    if (isLoading) {
        content = <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    }
    if (isError) {
        content = <div><p className="text-red-600 font-semibold text-lg">Something went wrong....</p></div>
    }
    if (!isLoading && !isError && !profile) {
        content = <div><p className="text-red-600 font-semibold text-lg">No Data Found....</p></div>
    }
    if (!isLoading && !isError && profile) {
        content = <div className="space-y-3">
            <img className="w-28 h-28 rounded-full border mx-auto border-blue-600 shadow" src={profile?.image || userprofile} alt="user profile" />
            <p><strong>Name:</strong> {profile?.name}</p>
            <p><strong>Email:</strong> {profile?.email}</p>
            <p><strong>Address:</strong> {profile?.address || "N/A"}</p>
            <p><strong>City:</strong> {profile?.city || "N/A"}</p>
            <p><strong>Phone:</strong> {profile?.phone || "N/A"}</p>
        </div>
    }

    const [open, setOpen] = useState(false)
    const form = useForm({
        defaultValues: {
            name: profile?.name,
            email: profile?.email,
            image: profile?.image,
            address: profile?.address,
            city: profile?.city,
            phone: profile?.phone,
        }
    })

    const { reset } = form

    useEffect(() => {
        if (profile) {
            reset({
                name: profile?.name || '',
                email: profile?.email,
                image: profile?.image || '',
                address: profile?.address || '',
                city: profile?.city || '',
                phone: profile?.phone || '',
            });
        }
    }, [profile, reset]);

    // image upload to coudinary start 
    const [image, setImage] = useState<File | null>(null);

    const handleImageChange = (file: File) => {
        setImage(file);
    };
    // image upload to coudinary  end 

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Loading...")
        try {
            let imageUrl = profile?.image;
            if (image) {
                const formData = new FormData();
                formData.append("file", image);
                formData.append("upload_preset", "cycle_labs"); // Replace with your Cloudinary preset

                const response = await axios.post(
                    "https://api.cloudinary.com/v1_1/dvjeaplel/image/upload", // Replace with your Cloudinary cloud name
                    formData
                );
                // cloudirnay img url 
                imageUrl = response.data.secure_url
            }
            const res = await updateProfile({ ...data, image: imageUrl })
            if (res?.error) {
                toast.error((res?.error as any)?.error || (res?.error as any)?.data?.message, { id: toastId })
            } else {
                toast.success("Profile updated Successfull...", { id: toastId })
                setOpen(!open)
            }

        } catch (error) {
            toast.error('Failed to Update profile. Please try again.')
        }
    }

    return (
        <div className="grid place-items-center h-[75vh]">
            <Card className="max-w-lg mx-auto w-full shadow-lg rounded-lg p-5">
                <CardContent className="space-y-3">
                    <h2 className="text-xl font-bold text-center">My Profile</h2>
                    {content}
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <div onClick={() => setOpen(!open)}>
                                <Button className="bg-blue-600 hover:bg-blue-700 rounded">Update Profile</Button>
                            </div>
                        </DialogTrigger>
                        <DialogContent aria-describedby={undefined} className="sm:max-w-[425px]">
                            <DialogTitle className="sr-only">Update Your Profile</DialogTitle>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 max-w-md mx-auto w-full">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field, fieldState: { error } }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="name" {...field} value={field.value || ''} />
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
                                                    <div className="flex flex-col gap-2">
                                                        {/* Show Image Preview if Available */}
                                                        {field.value && typeof field.value === "string" && (
                                                            <img src={field.value} alt="Product" className="w-32 h-32 object-cover rounded-lg border" />
                                                        )}

                                                        {/* File Input for Image Upload */}
                                                        <Input
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={async (e) => {
                                                                const file = e.target.files?.[0];
                                                                if (file) {
                                                                    handleImageChange(file); // Upload & update form state
                                                                }
                                                            }}
                                                        />
                                                    </div>
                                                </FormControl>

                                                {/* Error Message */}
                                                {error && <p className="text-red-500">{error.message}</p>}
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field, fieldState: { error } }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input readOnly placeholder="email" {...field} value={field.value || ''} />
                                                </FormControl>
                                                {
                                                    error && <p className="text-red-500">{error.message}</p>
                                                }
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="address"
                                        render={({ field, fieldState: { error } }) => (
                                            <FormItem>
                                                <FormLabel>Address</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Paddress" {...field} value={field.value || ''} />
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
                                            name="city"
                                            render={({ field, fieldState: { error } }) => (
                                                <FormItem>
                                                    <FormLabel>City</FormLabel>
                                                    <FormControl>
                                                        <Input type="text" placeholder="city" {...field} value={field.value || ''} />
                                                    </FormControl>
                                                    {
                                                        error && <p className="text-red-500">{error.message}</p>
                                                    }
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field, fieldState: { error } }) => (
                                                <FormItem>
                                                    <FormLabel>Phone</FormLabel>
                                                    <FormControl>
                                                        <Input type="number" placeholder="phone" {...field} value={field.value || ''} />
                                                    </FormControl>
                                                    {
                                                        error && <p className="text-red-500">{error.message}</p>
                                                    }
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded">Update Profile</Button>
                                </form>
                            </Form>
                        </DialogContent>
                    </Dialog>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProfileSetting;