import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import CustomField from "./custom-field";
import { Button } from "../ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios"; // Import axios
import { useState } from "react";
import { useZusLang } from "@/zustand/use-zus-lang";
import chessService from "@/chess.service";
import ReCAPTCHA from "react-google-recaptcha"; // Импорт компонента reCAPTCHA
import { useTranslation } from "react-i18next";

const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно быть не менее 2 символов" }),
  email: z.string().email({ message: "Некорректный email" }),
  text: z
    .string()
    .min(5, { message: "Сообщение должно содержать минимум 5 символов" }),
});

type FormTypes = z.infer<typeof formSchema>;

const FormFields = () => {
  const { t } = useTranslation("contacts");
  const activeLang = useZusLang().activeLang;
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      text: "",
    },
  });

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  // Function to handle the form submission
  const onSubmit = async (data: FormTypes) => {
    if (!captchaValue) {
      alert("Пожалуйста, пройдите проверку reCAPTCHA");
      return;
    }

    try {
      setLoading(true); // Set loading to true during submission
      const token = await chessService.getToken();

      if (!token) {
        console.error("Token is undefined or null");
        return; // Можно завершить функцию, если токен не получен
      }
      await axios.post(
        "https://tkmchess.com.tm/app/api/v1/contact-info",
        {
          name: data.name,
          email: data.email,
          help_you: data.text, // Use 'message' field for the message
        },
        {
          headers: {
            "X-CSRF-TOKEN": token,
            "Content-Type": "application/json",
          },
        }
      );
      setIsSubmitted(true);

      form.reset();

      // Optionally, you can show a success message or handle it further
    } catch (error) {
      console.error("Error submitting form", error);
      // Optionally, show an error message to the user
    } finally {
      setLoading(false); // Set loading back to false after submission
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="flex flex-col gap-6 md:gap-10">
          <CustomField
            control={form.control}
            name={"name"}
            placeholder={t("namePlace")}
            label={t("name")}
            error={form.formState.errors.name}
          />
          <CustomField
            control={form.control}
            name={"email"}
            placeholder={t("emailPlace")}
            label={"E-mail"}
            error={form.formState.errors.email}
          />
          <CustomField
            textArea
            control={form.control}
            name={"text"}
            placeholder={t("messagePlace")}
            label={t("message")}
            error={form.formState.errors.text}
          />
        </div>

        <div className="my-4">
          <ReCAPTCHA
            sitekey="6LfR8NsqAAAAAKHjM5Titovtp9_RelCm71Un1Fkr"
            onChange={handleCaptchaChange}
          />
        </div>

        {activeLang.value === "ru" ? (
          <p className="md:mt-5 mt-4 md:mb-10 mb-6 leading-none text-DGRAY2">
            Поля отмеченные <span className="text-RED_PASTEL">*</span>{" "}
            обязательны для заполнения
          </p>
        ) : activeLang.value === "tm" ? (
          <p className="md:mt-5 mt-4 md:mb-10 mb-6 leading-none text-DGRAY2">
            <span className="text-RED_PASTEL">*</span> bilen bellenilen
            meýdançalar hökmany doldurylmaly
          </p>
        ) : (
          <p className="md:mt-5 mt-4 md:mb-10 mb-6 leading-none text-DGRAY2">
            Fields marked with <span className="text-RED_PASTEL">*</span> are
            required
          </p>
        )}

        <Button
          type="submit"
          className="w-full md:mr-[100px]"
          disabled={loading || isSubmitted}
        >
          {loading ? t("loading") : t("button")}
        </Button>
        {isSubmitted && (
          <p className="text-lg text-center mt-4 font-semibold text-green-600">
            {t("success")}
          </p>
        )}
      </form>
    </Form>
  );
};

export default FormFields;
