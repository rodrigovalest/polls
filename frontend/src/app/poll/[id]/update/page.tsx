"use client";

import Button from "@/components/Button";
import Title from "@/components/Title";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { ICreatePollRequest } from "@/models/request/ICreatePollRequest";
import { formatDateToMySQL } from "@/services/DateService";
import { useUpdatePollMutate } from "@/hooks/useUpdatePollMutate";
import { usePollData } from "@/hooks/usePollData";
import Loading from "@/components/Loading";

const createPollSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  start_date: yup
    .date()
    .required("Start date is required"),
  end_date: yup
    .date()
    .required("End date is required"),
  options: yup
    .array()
    .of(
      yup.object().shape({
        description: yup.string().required("Option description is required"),
      })
    )
    .min(3, "At least 3 options are required"),
});

interface IUpdatePollProps {
  params: { id: string }
}

export default function UpdatePoll({
  params
}: IUpdatePollProps) {
  const router = useRouter();
  const [options, setOptions] = useState<string[]>(["", "", ""]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreatePollRequest>({
    resolver: yupResolver(createPollSchema),
  });
  const { updatePollMutate } = useUpdatePollMutate();
  const { data, isLoading, error } = usePollData(params.id);

  useEffect(() => {
    if (data?.options)
      setOptions(data.options.map((option: IOption) => option.description));
  }, [data]);

  function goToHomepage() {
    router.push("/");
  }

  function back() {
    router.back();
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
      options: options.map((option) => ({ description: option })),
      start_date: formatDateToMySQL(new Date(data.start_date)),
      end_date: formatDateToMySQL(new Date(data.end_date)),
    };

    updatePollMutate.mutate({ pollId: params.id, data: formattedData }, {
      onSuccess: () => router.back(),
      onError: () => alert("Error deleting poll. Please try again.")
    });
  }

  if (isLoading) 
    return <Loading />

  if (error)
    return <p className="font-MonaSans text-lg font-medium">Error loading data</p>;

  return (
    <div className="w-11/12 xl:w-2/3 2xl:w-1/2 mb-10">
      <div className="mb-7">
        <Title title="Update poll" />
      </div>

      <div className="mb-8">
        <div className="inline-block mr-1">
          <Button text="Homepage" onClick={goToHomepage} />
        </div>
        <div className="inline-block mr-1">
          <Button text="Back" onClick={back} />
        </div>
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
            defaultValue={data?.title ?? ""}
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div className="px-6 mb-4">
          <p className="font-MonaSans text-lg font-medium mb-2">Start date:</p>
          <input
            type="datetime-local"
            {...register("start_date")}
            className="w-96 p-2 bg-appLightGray rounded-lg"
            defaultValue={data?.start_date ?? ""}
          />
          {errors.end_date && (
            <p className="text-red-500">{errors.start_date.message}</p>
          )}
        </div>

        <div className="px-6 mb-4">
          <p className="font-MonaSans text-lg font-medium mb-2">End date:</p>
          <input
            type="datetime-local"
            {...register("end_date")}
            className="w-96 p-2 bg-appLightGray rounded-lg"
            defaultValue={data?.end_date ?? ""}
          />
          {errors.end_date && (
            <p className="text-red-500">{errors.end_date.message}</p>
          )}
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
              <p className="text-red-500">
                {errors.options[index]?.description?.message}
              </p>
            )}
          </div>
        ))}

        <div className="flex justify-between px-6 pt-4">
          <Button text="Update poll" onClick={handleSubmit(submitForm)} />
          <Button text="Add a new option" onClick={incrementOptionsCounter} />
        </div>
      </div>
    </div>
  );
}
