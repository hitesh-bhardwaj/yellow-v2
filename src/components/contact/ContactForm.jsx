/* eslint-disable no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  number: z.string().min(10, {
    message: "Contact number must be at least 10 digits.",
  }),
  detail: z.string().min(10, {
    message: "Detail must be at least 10 characters.",
  }),
});

const options = ["option-one", "option-two", "option-three", "option-four"];
const services = ["Service1", "Service2", "Service3", "Service4"];

export default function ContactForm() {
  const [selectedValue, setSelectedValue] = useState("option-one");
  const [checkedState, setCheckedState] = useState(
    Object.fromEntries(services.map((service) => [service, false]))
  );

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      detail: "",
    },
  });

  const handleValueChange = (value) => {
    setSelectedValue(value);
  };

  const handleCheckboxChange = (service) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [service]: !prevState[service],
    }));
  };

  const getClassName = (value) =>
    selectedValue === value ? "text-white border-opacity-100" : "text-black border-opacity-100";

  const getClassNames = (isChecked) =>
    isChecked ? "text-white border-opacity-100" : "text-black border-opacity-100";

  return (
    <section className="px-[5vw] py-[5%] tablet:py-[10%] mobile:pt-[25%]">
      <h3
        data-para-anim
        className="text-[4.8vw] leading-[1.2] font-display w-[70%] mb-[7vw] tablet:text-[5.4vw] mobile:text-[10vw] mobile:w-full"
      >
        Connect with our team to bring your ideas to life.
      </h3>
      <Form {...form}>
        <form className="form flex flex-wrap gap-y-[1.4vw] mobile:gap-[2.5vw] mobile:gap-y-[7vw] mobile:py-[10vw] tablet:gap-y-[2vw]">
          <p data-para-anim className="text-[2.5vw] font-medium leading-[1.4] tablet:text-[3.5vw] mobile:text-[6.4vw]">
            Hello! My name is
          </p>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="h-full flex justify-center">
                <FormControl>
                  <Input placeholder="Type your name*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p data-para-anim className="text-[2.5vw] font-medium tablet:text-[3.5vw] mobile:text-[6.4vw]">and</p>
          <p data-para-anim className="text-[2.5vw] font-medium tablet:text-[3.5vw] mobile:text-[6.4vw]">
             I Found you using
          </p>
          <FormField
            control={form.control}
            name="source"
            render={() => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    value={selectedValue}
                    onValueChange={handleValueChange}
                    className="flex gap-[1.5vw] px-[1vw] tablet:h-[4vw] mobile:flex-col mobile:gap-[3vw] fadeup"
                  >
                    {options.map((option) => (
                      <div
                        key={option}
                        className={`min-w-[10vw] relative overflow-hidden h-[3.5vw] px-[1.5vw] py-[0.3vw] border-[1px] border-black rounded-full tablet:min-w-[15vw] tablet:h-[4.5vw] mobile:min-w-[85vw] mobile:min-h-[14vw] mobile:flex mobile:justify-start mobile:gap-[3vw] mobile:px-[6vw] ${getClassName(
                          option
                        )} flex justify-center items-center gap-[1vw] cursor-pointer`}
                        onClick={() => handleValueChange(option)}
                        data-state={selectedValue === option ? "checked" : "unchecked"}
                      >
                        <span
                          className={`w-full h-full absolute bottom-0 left-0 block origin-bottom transition-all duration-300 ease-out bg-black z-[-1]  ${
                            selectedValue === option ? "scale-y-[1]" : "scale-y-0"
                          }`}
                        />
                        <RadioGroupItem value={option} id={option} />
                        <div className="w-[1vw] h-[1vw] border rounded-full bg-white border-black mobile:w-[3vw] mobile:h-[3vw]"></div>
                        <Label htmlFor={option} className="text-[1.2vw] cursor-pointer tablet:text-[2vw] mobile:text-[4vw]">
                          {option.replace("-", " ")}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <p data-para-anim className="text-[2.5vw] font-medium tablet:text-[3.5vw] mobile:text-[6.4vw]">
            I’m looking for Service:
          </p>
          <FormField
            control={form.control}
            name="services"
            render={() => (
              <FormItem>
                <FormControl>
                  <div className="flex gap-[1vw] px-[2vw] justify-center items-center mobile:flex-col mobile:gap-[3vw] fadeup">
                    {services.map((service) => (
                      <Checkbox
                        key={service}
                        className={`flex items-center relative overflow-hidden justify-center space-x-2 py-[0.5vw] px-[1.4vw] min-w-[10vw] min-h-[3.4vw] border-[1px] tablet:min-w-[14vw] tablet:min-h-[3.5vw] border-black rounded-full cursor-pointer tablet:space-x-0 tablet:h-[4vw] mobile:w-[85vw] mobile:h-[14vw] mobile:justify-start mobile:px-[6vw] ${getClassNames(
                          checkedState[service]
                        )}`}
                        onClick={() => handleCheckboxChange(service)}
                        data-state={checkedState[service] ? "checked" : "unchecked"}
                      >
                        <span
                          className={`w-full h-full absolute bottom-0 left-0 block origin-bottom transition-all duration-300 ease-out bg-black z-[-1] ${
                            checkedState[service] ? "scale-y-[1]" : "scale-y-0"
                          }`}
                        />
                        <label className="text-[1.2vw] font-medium leading-none cursor-pointer peer-disabled:opacity-70 tablet:text-[2vw] tablet:ml-0 mobile:text-[4.5vw]">
                          {service}
                        </label>
                        <input
                          type="hidden"
                          name={service}
                          value={checkedState[service] ? "true" : "false"}
                        />
                      </Checkbox>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <p data-para-anim className="text-[2.5vw] font-medium tablet:text-[3.5vw] mobile:text-[6.4vw]">
              Feel Free to reach me at
            </p>
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="form-detail">
                <FormControl>
                  <Input
                    placeholder="Type your email*"
                    {...field}
                    className="w-[35vw]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p data-para-anim className="text-[2.5vw] font-medium tablet:text-[3.5vw] mobile:hidden">
            and
          </p>
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem className="form-detail">
                <FormControl>
                  <Input
                    placeholder="Type your Contact Number*"
                    {...field}
                    className="w-[35vw]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p data-para-anim className="text-[2.5vw] font-medium tablet:text-[3.5vw] mobile:text-[6.4vw]">
            I would like to share more about my project:
          </p>
          <FormField 
            control={form.control}
            name="detail"
            render={({ field }) => (
              <FormItem className=" detail">
                <FormControl>
                  <Input placeholder="Type your detail*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex justify-center items-center fadeup mt-[3vw]">
            <Button
              type="submit"
              className="text-[1.4vw] px-[1.4vw] py-[0.6vw] min-w-[12vw] bg-black rounded-full min-h-[3.5vw] flex gap-[0.5vw] hover:bg-black group tablet:text-[2vw] tablet:min-w-[15vw] tablet:px-[3vw] tablet:py-[1vw] mobile:text-[5vw] mobile:px-[4.5vw] mobile:h-[12vw]"
            >
              <div className="overflow- flex items-center gap-[0.5vw] w-full mobile:gap-[2vw]">
                <span
                  data-text={"Send Message"}
                  className="relative inline-block after:content-[attr(data-text)] after:absolute after:top-[130%] after:left-0 group-hover:translate-y-[-130%] transition-transform duration-1000 ease-link"
                >
                  Send Message
                </span>
                <svg
                  className="relative -rotate-[135deg] w-[1.1vw] h-[1.1vw] tablet:w-[2vw] tablet:h-[2vw] mobile:w-[5vw] mobile:h-[5vw] "
                  width="19"
                  height="23"
                  viewBox="0 0 19 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out"
                    d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                    fill="currentColor"
                  />
                  <path
                    className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out"
                    d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
