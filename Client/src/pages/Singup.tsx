import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Singup = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
          <div className="mx-auto max-w-sm w-full rounded-md shadow py-14 border p-5">
            <div className="mb-6 flex flex-col items-center">
              <a href="https://shadcnblocks.com">
                <img
                  src="https://shadcnblocks.com/images/block/block-1.svg"
                  alt="logo"
                  className="mb-7 h-10 w-auto"
                />
              </a>
              <p className="mb-2 text-2xl font-bold">Shadcnblocks.com</p>
              <p className="text-muted-foreground">
                Please enter your details.
              </p>
            </div>
            <div>
              <div className="grid gap-4">
                <Input type="name" placeholder="Enter your name" required />
                <Input type="email" placeholder="Enter your email" required />
                <div>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <Button type="submit" className="mt-2 w-full">
                  Create an account
                </Button>
              </div>
              <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
                <p>Don&apos;t have an account?</p>
                <Link to={'/login'} className="text-primary hover:underline">
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
