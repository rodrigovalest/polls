"use client";

import Button from "@/components/Button";
import Title from "@/components/Title";
import { useCreatePollMutate } from "@/hooks/useCreatePollMutate";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { ICreatePollRequest } from "@/models/request/ICreatePollRequest";
import { formatDateToMySQL } from "@/services/DateService";

const createPollSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  start_date: yup.date()
    .required("Start date is required")
    .min(new Date(), "Start date cannot be in the past"),
  end_date: yup.date()
    .required("End date is required")
    .min(yup.ref('start_date'), "End date cannot be before start date"),
  options: yup.array().of(
    yup.object().shape({
      description: yup.string().required("Option description is required"),
    })
  ).min(3, "At least 3 options are required"),
});


export default function NewPoll() {
  const router = useRouter();
  const [options, setOptions] = useState<string[]>(["", "", ""]);
  const { register, handleSubmit, formState: { errors } } = useForm<ICreatePollRequest>({
    resolver: yupResolver(createPollSchema),
  });
  const { mutate, isSuccess, isError, error } = useCreatePollMutate();

  function goToHomepage() {
    router.push("/");
  }

  function incrementOptionsCounter() {
    setOptions([...options, ""]);
  }

  function decrementOptionsCounter(index: number) {
    if (options.length > 3) setOptions(options.filter((_, i) => i !== index));
  }

  function handleOptionChange(index: number, value: string) {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  }

  function submitForm(data: ICreatePollRequest) {
    const formattedData: ICreatePollRequest = {
      ...data,
      options: options.map(option => ({ description: option })),
      start_date: formatDateToMySQL(new Date(data.start_date)),
      end_date: formatDateToMySQL(new Date(data.end_date)),
    };
    mutate(formattedData);
  }

  if (isSuccess)
    router.push("/");

  if (isError)
    alert(error);

  return (
    <div className="w-11/12 xl:w-2/3 2xl:w-1/2 mb-10">
      <div className="mb-7">
        <Title title="Create a new poll" />
      </div>

      <div className="mb-8">
        <Button text="Homepage" onClick={goToHomepage} />
      </div>

      <div className="bg-appWhite border rounded-2xl shadow-md w-full py-8">
        <div className="px-6 mb-4">
          <p className="font-MonaSans text-lg font-medium mb-2">Title</p>
          <input
            type="text"
            {...register("title")}
            className="h-12 w-full bg-appLightGray rounded-lg px-2 font-MonaSans font-normal"
            autoComplete="off"
            autoCorrect="off"
          />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        </div>

        <div className="px-6 mb-4">
          <p className="font-MonaSans text-lg font-medium mb-2">
            Start date:
          </p>
          <input
            type="datetime-local"
            {...register("start_date")}
            className="w-96 p-2 bg-appLightGray rounded-lg"
          />
          {errors.end_date && <p className="text-red-500">{errors.start_date.message}</p>}
        </div>

        <div className="px-6 mb-4">
          <p className="font-MonaSans text-lg font-medium mb-2">
            End date:
          </p>
          <input
            type="datetime-local"
            {...register("end_date")}
            className="w-96 p-2 bg-appLightGray rounded-lg"
          />
          {errors.end_date && <p className="text-red-500">{errors.end_date.message}</p>}
        </div>

        {options.map((option, index) => (
          <div key={index} className="px-6 mb-4">
            <div className="py-4 flex justify-between items-center">
              <p className="font-MonaSans text-lg font-medium mb-2 inline-block">
                Option {index + 1}
              </p>
              <Button
                text="Remove option"
                onClick={() => decrementOptionsCounter(index)}
                isActive={!(options.length <= 3)}
              />
            </div>

            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              className="h-12 w-full bg-appLightGray rounded-lg px-2 font-MonaSans font-normal"
            />
            {errors.options?.[index] && (
              <p className="text-red-500">{errors.options[index]?.description?.message}</p>
            )}
          </div>
        ))}

        <div className="flex justify-between px-6 pt-4">
          <Button text="Create poll" onClick={handleSubmit(submitForm)} />
          <Button text="Add a new option" onClick={incrementOptionsCounter} />
        </div>
      </div>
    </div>
  );
}
