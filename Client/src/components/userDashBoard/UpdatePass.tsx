/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { PasswordInput } from "@/components/ui/password-input";
import { useUpdatePasswordMutation } from "@/Redux/Features/Auth/AuthApi";

// Improved schema with additional validation rules
const formSchema = z.object({
    oldPassword: z
    .string()
    .regex(/[a-zA-Z0-9]/, { message: 'Password must be alphanumeric' }),
    newPassword: z
        .string()
        .regex(/[a-zA-Z0-9]/, { message: 'Password must be alphanumeric' }),
})

const UpdatePass = () => {
    const [updatePassword] = useUpdatePasswordMutation()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            oldPassword: "",
            newPassword: "",
        }
    })
    const {reset} = form

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const toastId = toast.loading("Loading...")
            // Assuming an async login function
            const loginData = {
                oldPassword: values?.oldPassword,
                newPassword: values?.newPassword
            }
            const res = await updatePassword(loginData)
            
            if (res?.error) {
                toast.error((res?.error as any)?.error || (res?.error?.data as any)?.message, { id: toastId })
              } else {
                reset()
                toast.success("Updare Your Password...", { id: toastId })
              }

        } catch (error) {
            toast.error('Failed to Update Password. Please try again.')
        }
    }
    return (
        <section className="py-14">
            <div className="container mx-auto">
                <div className="flex flex-col gap-4">
                    <div className="mx-auto max-w-sm w-full rounded-md shadow py-14 border p-5">
                        <div className="mb-6 flex flex-col items-center">
                            <p className="text-muted-foreground">
                                Update your password.
                            </p>
                        </div>
                        <div>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <div className="grid gap-4">

                                        <FormField
                                            control={form.control}
                                            name="oldPassword"
                                            render={({ field }) => (
                                                <FormItem className="grid gap-2">
                                                    <div className="flex justify-between items-center">
                                                        <FormLabel htmlFor="password">Current Password</FormLabel>
                                                    </div>
                                                    <FormControl>
                                                        <PasswordInput
                                                            id="oldPassword"
                                                            placeholder="******"
                                                            autoComplete="oldPassword"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="newPassword"
                                            render={({ field }) => (
                                                <FormItem className="grid gap-2">
                                                    <div className="flex justify-between items-center">
                                                        <FormLabel htmlFor="newPassword">Password</FormLabel>
                                                    </div>
                                                    <FormControl>
                                                        <PasswordInput
                                                            id="password"
                                                            placeholder="******"
                                                            autoComplete="newPassword"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <Button type="submit" className="mt-2 w-full bg-blue-600 hover:bg-blue-700 rounded">
                                            Update Password
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpdatePass;