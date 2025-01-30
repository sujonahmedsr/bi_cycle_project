/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoMdBicycle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { PasswordInput } from "@/components/ui/password-input";
import { useRegistrationMutation } from "@/Redux/Features/Auth/AuthApi";
import { useAppSelector } from "@/Redux/hooks";
import { useCurrentToken } from "@/Redux/Features/Auth/AuthSlice";

// Improved schema with additional validation rules
const formSchema = z.object({
  name: z.string().min(1, { message: 'Invalid name address' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' })
    .regex(/[a-zA-Z0-9]/, { message: 'Password must be alphanumeric' }),
})

const Singup = () => {
  const [signUp] = useRegistrationMutation()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    }
  })
  const navigate = useNavigate()

  const token = useAppSelector(useCurrentToken)

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Assuming an async login function

      const toastId = toast.loading("Loading...")
      const signUpData = {
        name: values?.name,
        email: values?.email,
        password: values?.password
      }

      const res = await signUp(signUpData)
      if (res?.error) {
        toast.error((res?.error as any)?.message || (res?.error?.data as any)?.message || "Something went wrong", { id: toastId })
      } else {
        navigate('/login')
        toast.success("Registration Successfull..., Please login now", { id: toastId })
      }

    } catch (error) {
      toast.error('Failed to ragistration. Please try again.')
    }
  }

  if (token) {
    return <div className="h-[60vh] grid place-items-center">
      <div className="mt-5 mx-auto text-center">
        <h1>You are already You are logged in..</h1>
        <Link to={'/products'} >
          <Button variant={"outline"} className="mt-5 hover:text-blue-600">View All Product</Button>
        </Link>
      </div>
    </div>
  }

  return (
    <section className="py-14">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
          <div className="mx-auto max-w-sm w-full rounded-md shadow py-14 border p-5">
            <div className="mb-6 flex flex-col items-center">
              <Link to={'/'} className="text-2xl font-bold flex items-center gap-2">
                <IoMdBicycle className="text-3xl text-blue-600" />
                <h1>Cycle<span className="text-blue-600">_Labs</span></h1>
              </Link>
              <p className="text-muted-foreground">
                Please enter your details.
              </p>
            </div>
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="grid gap-2">
                          <FormLabel htmlFor="name">Name</FormLabel>
                          <FormControl>
                            <Input
                              id="name"
                              placeholder="Eneter your name"
                              type="text"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="grid gap-2">
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <FormControl>
                            <Input
                              id="email"
                              placeholder="johndoe@mail.com"
                              type="email"
                              autoComplete="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem className="grid gap-2">
                          <div className="flex justify-between items-center">
                            <FormLabel htmlFor="password">Password</FormLabel>
                          </div>
                          <FormControl>
                            <PasswordInput
                              id="password"
                              placeholder="******"
                              autoComplete="current-password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="mt-2 w-full bg-blue-600 hover:bg-blue-700 rounded">
                      Login
                    </Button>
                  </div>
                </form>
              </Form>
              <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
                <p>Don&apos;t have an account?</p>
                <Link to={'/login'} className="text-blue-700 hover:underline">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Singup;
