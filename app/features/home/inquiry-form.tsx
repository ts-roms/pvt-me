import {motion} from "framer-motion";
import {useFetcher} from "react-router";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "~/components/ui/card";
import React, {type ChangeEvent, useState} from "react";
import {submitInquiry} from "~/api/firebase";
import type {Inquiry, InquiryErrors} from "~/@types/inquiry";


export const InquiryForm = () => {
  return (
    <motion.div
      initial={{opacity: 0, y: 12}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, margin: '-100px'}}
      transition={{duration: 0.35}}
    >
      <Card className="bg-white dark:bg-gray-900/40">
        <CardHeader>
          <CardTitle className="text-xl">Let’s work together.</CardTitle>
        </CardHeader>
        <CardContent>
          {/*  Contact / Inquiry Form */}
          <InquiryField/>
        </CardContent>
        <CardFooter>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Prefer email? Reach me at{' '}
            <a
              className="underline underline-offset-2 hover:text-indigo-600"
              href={`mailto:rcena.dev@gmail.com?subject=Project Inquiry`}
            >
              rcena.dev@gmail.com
            </a>
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

const defaultValues = {name: '', email: '', message: ''}

function InquiryField() {
  const [success, setSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [inquiry, setInquiry] = useState<Inquiry>(defaultValues);

  const fetcher = useFetcher();

  const handleSaveData = async (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validate(inquiry);
    if(Object.keys(formErrors).length !== 0) {
      setErrors(formErrors);
      return;
    }

    try {
      await submitInquiry(inquiry).then(() => {
        setSuccess(true);
        setErrors({});
      })
    } catch (e) {
      console.error(`Catch Exception: ${e}`);
    }
  }
  return (
    <>
      <fetcher.Form id={"inquiry-form"} onSubmit={handleSaveData} className="space-y-4"
                    style={{display: success ? 'none' : 'block'}}>
        <div className="grid gap-1.5">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            className="w-full rounded-md border border-gray-300 bg-white/80 px-3 py-2 text-sm outline-none ring-0 transition focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900/60"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInquiry((prev) => ({
                ...prev,
                name: e.target.value
              }))
            }}
          />
          {errors.name && (
            <p className="text-xs text-red-600 dark:text-red-400">Please enter at least 2 characters.</p>
          )}
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-gray-800 dark:text-gray-200">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-md border border-gray-300 bg-white/80 px-3 py-2 text-sm outline-none ring-0 transition focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900/60"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInquiry((prev) => ({
                ...prev,
                email: e.target.value
              }))
            }}
          />
          {errors.email && (
            <p className="text-xs text-red-600 dark:text-red-400">Please enter a valid email address.</p>
          )}
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="message" className="text-sm font-medium text-gray-800 dark:text-gray-200">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell me about your project or how I can help…"
            className="w-full resize-y rounded-md border border-gray-300 bg-white/80 px-3 py-2 text-sm outline-none ring-0 transition focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900/60"
            required

            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setInquiry((prev) => ({
                ...prev,
                message: e.target.value
              }))
            }}
          />
          {errors.message && (
            <p className="text-xs text-red-600 dark:text-red-400">Please enter at least 6 characters.</p>
          )}
        </div>


        <div className="pt-2">
          <button
            type="submit"
            className="inline-flex items-center cursor-pointer rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
            onClick={handleSaveData}
          >
            Send Inquiry!
          </button>
        </div>
      </fetcher.Form>

      {success && (
        <p className="text-sm text-green-600 dark:text-green-400">Thanks! I will get back to you shortly.</p>
      )}
    </>
  )
}

const validate = (inquiry: Inquiry) => {
  const newErrors: InquiryErrors = {};

  if (!inquiry.name || inquiry.name.trim().length < 2) {
    newErrors.name = "Please enter at least 2 characters.";
  }
  if (!inquiry.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email)) {
    newErrors.email = "Please enter a valid email address.";
  }
  if (!inquiry.message || inquiry.message.trim().length < 6) {
    newErrors.message = "Please enter at least 6 characters.";
  }
  return newErrors;
};
