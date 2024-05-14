"use client";

import { createBoard } from "@/actions/create-board";

import { FormInput } from "./form-input";
import { FormButton } from "./form-button";
import { useAction } from "@/hooks/use-action";

export const Form = () => {
  // @ts-ignore
  const { execute, fieldErrors } = useAction(createBoard);
  return (
    // @ts-ignore
    <form action={displatch}>
      <div className="flex flex-col space-y-2">
        {/* @ts-ignore */}
        <FormInput errors={state?.errors} />
      </div>
      <FormButton />
    </form>
  );
};
