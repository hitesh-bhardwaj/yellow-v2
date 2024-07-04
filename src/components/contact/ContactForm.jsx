import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function ContactForm() {
  // ...

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  return (
    <section className="px-[5vw] py-[8%]">
      <h3 className="text-[4.8vw] leading-[1.2] font-display w-[70%] mb-[7vw]">
      Connect with our team to bring your ideas to life.
      </h3>
      <Form {...form}>
        <form className=" form flex flex-wrap ">
          <p className="text-[3vw] font-medium leading-[1.4]">Hello! My name is</p>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="h-full flex justify-center">
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="text-[3vw] font-medium">and </p>
          <p className="text-[3vw] font-medium">I Found you using</p>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    defaultValue="option-one"
                    className="flex gap-[1.5vw] px-[1vw] text-red-500"
                  >
                    <div className="min-w-[10vw] min-h-[3vw] px-[1.5vw] border-[1.5px] border-black rounded-[50px] border-opacity-60 flex justify-center items-center gap-[1vw] cursor-pointer">
                      <div className="w-[1vw] h-[1vw] border-[1px] rounded-full border-black"></div>
                      <RadioGroupItem
                        value="option-one"
                        id="option-one"
                        className=""
                      />
                      <Label htmlFor="option-one" className="text-[1.4vw]">
                        Option One
                      </Label>
                    </div>
                    <div className="min-w-[10vw] min-h-[3vw] px-[1.5vw] py-[0.6vw] border-[1.5px] border-black rounded-[50px] border-opacity-60 flex justify-center items-center gap-[1vw] cursor-pointer">
                      <div className="w-[1vw] h-[1vw] border-[1px] rounded-full border-black"></div>
                      <RadioGroupItem value="option-two" id="option-two" className="" />
                      <Label htmlFor="option-one" className="text-[1.4vw]">
                        Option two
                      </Label>
                    </div>
                    <div className="min-w-[10vw] min-h-[3vw] px-[1.5vw] py-[0.6vw] border-[1.5px] border-black rounded-[50px] border-opacity-60 flex justify-center items-center gap-[1vw] cursor-pointer">
                      <div className="w-[1vw] h-[1vw] border-[1px] rounded-full border-black"></div>
                      <RadioGroupItem value="option-three" id="option-three" className="" />
                      <Label htmlFor="option-one" className="text-[1.4vw]">
                        Option three
                      </Label>
                    </div>
                    <div className="min-w-[10vw] min-h-[3vw] px-[1.5vw] py-[0.6vw] border-[1.5px] border-black rounded-[50px] border-opacity-60 flex justify-center items-center gap-[1vw] cursor-pointer">
                      <div className="w-[1vw] h-[1vw] border-[1px] rounded-full border-black"></div>
                      <RadioGroupItem value="option-four" id="option-four" className="" />
                      <Label htmlFor="option-one" className="text-[1.4vw]">
                        Option four
                      </Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <p className="text-[3vw] font-medium">I’m looking for Service:</p>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex gap-[1vw] px-[2vw] justify-center items-center">
                    <div className="flex items-center justify-center space-x-2 py-[0.4vw] px-[1.4vw] min-w-[10vw] min-h-[3vw] border-[1.5px] border-black border-opacity-60 rounded-[50px] cursor-pointer">
                      <Checkbox id="check-1" disabled className="" />
                      <label
                        htmlFor="terms2"
                        className="text-[1.4vw] text-black font-medium leading-none cursor-pointer peer-disabled:opacity-70"
                      >
                        <p className="text-black">check1</p>
                      </label>
                    </div>
                    <div className="flex items-center justify-center space-x-2 py-[0.4vw] px-[1.4vw] min-w-[10vw] min-h-[3vw] border-[1.5px] border-black border-opacity-60 rounded-[50px] cursor-pointer">
                      <Checkbox id="check-2" disabled className="" />
                      <label className="text-[1.4vw] text-black font-medium leading-none cursor-pointer peer-disabled:opacity-70">
                        <p className="text-black">check2</p>
                      </label>
                    </div>
                    <div className="flex items-center justify-center space-x-2 py-[0.4vw] px-[1.4vw] min-w-[10vw] min-h-[3vw] border-[1.5px] border-black border-opacity-60 rounded-[50px] cursor-pointer">
                      <Checkbox id="check-3" disabled className="" />
                      <label className="text-[1.4vw] text-black font-medium leading-none cursor-pointer peer-disabled:opacity-70">
                        <p className="text-black">check3</p>
                      </label>
                    </div>
                    <div className="flex items-center justify-center space-x-2 py-[0.4vw] px-[1.4vw] min-w-[10vw] min-h-[3vw] border-[1.5px] border-black border-opacity-60 rounded-[50px] cursor-pointer">
                      <Checkbox id="check-4" disabled className="" />
                      <label className="text-[1.4vw] text-black font-medium leading-none cursor-pointer peer-disabled:opacity-70">
                        <p className="text-black">check4</p>
                      </label>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <p className="text-[3vw] font-medium">Feel Free to reach me at</p>
          </div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="form-detail">
                <FormControl>
                  <Input
                    placeholder="type your email"
                    {...field}
                    className="w-[30vw]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="text-[3vw] font-medium">and</p>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="form-detail">
                <FormControl>
                  <Input
                    placeholder="type your Contact Number"
                    {...field}
                    className="w-[30vw]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="text-[3vw] font-medium">
            I would like to share more about my project:
          </p>
          <div className="mb-[4vw] mt-[1vw]">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="details">
                  <FormControl>
                    <Input placeholder="type your details" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full flex justify-center items-center h-[4vw]">
            <Button
              type="submit"
              className="text-[1.4vw] px-[1.4vw] py-[0.6vw] min-w-[12vw] bg-black rounded-[50px] min-h-[3.5vw] flex gap-[0.5vw] hover:bg-black group"
            >
              <div className="overflow- flex items-center gap-[0.5vw] w-full">
                <span data-text={"Send Message"} className="relative inline-block after:content-[attr(data-text)] after:absolute after:top-[130%] after:left-0 group-hover:translate-y-[-130%] transition-transform duration-1000 ease-link after:block">Send Message</span>
                <svg className="relative -rotate-[135deg] w-[1.1vw] h-[1.1vw] overflow-" width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor"/>
                    <path className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor"/>
                </svg>
            </div>
             
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
