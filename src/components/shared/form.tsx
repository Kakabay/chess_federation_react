import { useForm } from 'react-hook-form';
import { Form } from '../ui/form';
import CustomField from './custom-field';
import { Button } from '../ui/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios'; // Import axios
import { useState } from 'react';
import { useZusLang } from '@/zustand/use-zus-lang';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Имя должно быть не менее 2 символов' }),
  email: z.string().email({ message: 'Некорректный email' }),
  text: z.string().min(5, { message: 'Сообщение должно содержать минимум 5 символов' }),
});

type FormTypes = z.infer<typeof formSchema>;

const FormFields = () => {
  const activeLang = useZusLang().activeLang;
  const [loading, setLoading] = useState(false); // Loading state for submission
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      text: '',
    },
  });

  // Function to handle the form submission
  const onSubmit = async (data: FormTypes) => {
    try {
      setLoading(true); // Set loading to true during submission
      const response = await axios.post(
        'http://216.250.12.9:8088/api/v1/contact-info',
        {
          name: data.name,
          email: data.email,
          help_you: data.text, // Use 'message' field for the message
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('Form submitted successfully', response.data);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      // Optionally, you can show a success message or handle it further
    } catch (error) {
      console.error('Error submitting form', error);
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
            name={'name'}
            placeholder={activeLang.value === 'ru' ? 'Напишите свое имя' : 'Adyňyzy ýazyň'}
            label={activeLang.value === 'ru' ? 'Имя' : 'Ady'}
            error={form.formState.errors.name}
          />
          <CustomField
            control={form.control}
            name={'email'}
            placeholder={
              activeLang.value === 'ru'
                ? 'Напишите свою электронную почту'
                : 'Öz elektron poçtaňyzy ýazyň'
            }
            label={'E-mail'}
            error={form.formState.errors.email}
          />
          <CustomField
            textArea
            control={form.control}
            name={'text'}
            placeholder={
              activeLang.value === 'ru'
                ? 'напишите свой вопрос или сообщение'
                : 'öz soragyňyzy ýazyň'
            }
            label={activeLang.value === 'ru' ? 'Ваше сообщение' : 'Hatyňyzyň mazmuny'}
            error={form.formState.errors.text}
          />
        </div>
        {activeLang.value === 'ru' ? (
          <p className="md:mt-5 mt-4 md:mb-10 mb-6 leading-none text-DGRAY2">
            Поля отмеченные <span className="text-RED_PASTEL">*</span> обязательны для заполнения
          </p>
        ) : (
          <p className="md:mt-5 mt-4 md:mb-10 mb-6 leading-none text-DGRAY2">
            <span className="text-RED_PASTEL">*</span> bilen bellenilen meýdançalar hökmany
            doldurylmaly
          </p>
        )}
        {activeLang.value === 'ru' ? (
          <Button type="submit" className="w-full md:mr-[100px]" disabled={loading}>
            {loading ? 'Отправка...' : 'Отправить сообщение'}
          </Button>
        ) : (
          <Button type="submit" className="w-full md:mr-[100px]" disabled={loading}>
            {loading ? 'Ugradylýar...' : 'Haty ugrat'}
          </Button>
        )}
        {isSubmitted && (
          <p className="text-lg text-center mt-4 font-semibold text-green-600">
            {activeLang.value === 'ru'
              ? 'Сообщение отправленно успешно!'
              : 'Siziň hatyňyz üstünlikli ugradyldy!'}
          </p>
        )}
      </form>
    </Form>
  );
};

export default FormFields;
