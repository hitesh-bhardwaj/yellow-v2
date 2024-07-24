/* eslint-disable no-unused-vars */
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

function CareerForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      detail: "",
    },
  });
  return (
    <>
      <section id="CareerForm">
        <div className="container h-full ">
          <Form {...form}>
            <form className="w-full h-full border rounded-[50px] border-black py-[5vw] px-[5vw]">
              <div className="w-full border-b border career-input">
                <Select>
                  <SelectTrigger className="w-full placeholder:text-[2vw]">
                    <SelectValue placeholder="Which role are you applying for?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="role1">role1</SelectItem>
                      <SelectItem value="role2">role2</SelectItem>
                      <SelectItem value="role3">role3</SelectItem>
                      <SelectItem value="role4">role4</SelectItem>
                      <SelectItem value="role5">role5</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-[50%] flex flex-col">
                <p className="text-[1.5vw] font-medium">Your name*</p>
              <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="h-full flex justify-center career">
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
            </form>
          </Form>
        </div>
      </section>
    </>
  );
}

export default CareerForm;
