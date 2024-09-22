import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import CustomField from "./custom-field";
import { Button } from "../ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "adasd" }),
  email: z.string().email(),
  text: z.string().min(5, { message: "" }),
});

type FormTypes = z.infer<typeof formSchema>;

const FormFields = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      text: "",
    },
  });

  const onSubmit = (data: FormTypes) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="flex flex-col gap-6 md:gap-10">
          <CustomField
            control={form.control}
            name={"name"}
            placeholder={"Пожалуйста, представьтесь…"}
            label={"Имя"}
            error={form.formState.errors.name}
          />
          <CustomField
            control={form.control}
            name={"email"}
            placeholder={
              "Напишите свою электронную почту, куда прислать ответ…"
            }
            label={"E-mail"}
            error={form.formState.errors.email}
          />
          <CustomField
            textArea
            control={form.control}
            name={"text"}
            placeholder={
              "Пожалуйста, задайте нам вопрос или напишите сообщение…"
            }
            label={"Как мы можем вам помочь?"}
            error={form.formState.errors.text}
          />
        </div>
        <div className="md:mt-5 mt-4 md:mb-10 mb-6 leading-none text-DGRAY2">
          Поля отмеченные <span className="text-RED_PASTEL">*</span> обязательны
          для заполнения
        </div>
        <Button className="w-full md:mr-[100px]">Отправить сообщение</Button>
      </form>
    </Form>
  );
};

export default FormFields;
