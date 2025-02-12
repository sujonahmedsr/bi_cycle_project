/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoMdBicycle } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { useLoginMutation } from "@/Redux/Features/Auth/AuthApi";
import { jwtDecode } from "jwt-decode";
import { setUser, useCurrentToken } from "@/Redux/Features/Auth/AuthSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";

// Improved schema with additional validation rules
const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' })
    .regex(/[a-zA-Z0-9]/, { message: 'Password must be alphanumeric' }),
})

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [login] = useLoginMutation()
  const token = useAppSelector(useCurrentToken)

  const location = useLocation()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Assuming an async login function
      const toastId = toast.loading("Loading...")
      const loginData = {
        email: values?.email,
        password: values?.password
      }

      const res = await login(loginData)

      if (res?.error) {
        toast.error((res?.error as any)?.message || (res?.error as any)?.data?.message || "Something went wrong", { id: toastId })
      } else {
        const user = await jwtDecode(res?.data?.data?.token);
        dispatch(setUser({ user, token: res?.data?.data?.token }))
        navigate(location.state || '/', { replace: true })
        toast.success("Login Successfull..., If you not update your profile please update now.", { id: toastId })
      }
    } catch (error) {
      toast.error('Failed to login. Please try again.')
    }
  }

  if (token) {
    return <div className="h-[60vh] grid place-items-center p-4">
      <div className="mt-5 mx-auto text-center">
        <h1>You are already You are logged in..</h1>
        <Link to={'/products'} >
          <Button variant={"outline"} className="mt-5 hover:text-blue-600">View All Product</Button>
        </Link>
      </div>
    </div>
  }

  return (
    <section className="py-14 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
          <div className="mx-auto max-w-sm w-full rounded-md shadow py-14 border p-5">
            <div className="mb-6 flex flex-col items-center">
              <Link to={'/'} className="text-2xl font-bold flex items-center gap-2">
                <IoMdBicycle className="text-3xl text-blue-600" />
                <h1>Cycle<span className="text-blue-600">_Labs</span></h1>
              </Link>
              <p className="text-muted-foreground">
                Please login now.
              </p>
            </div>
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid gap-4">
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
                <Link to={'/singup'} className="text-blue-600 hover:underline">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
