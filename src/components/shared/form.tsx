import { useForm } from 'react-hook-form';
import { Form } from '../ui/form';
import CustomField from './custom-field';
import { Button } from '../ui/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios'; // Import axios
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Имя должно быть не менее 2 символов' }),
  email: z.string().email({ message: 'Некорректный email' }),
  text: z.string().min(5, { message: 'Сообщение должно содержать минимум 5 символов' }),
});

type FormTypes = z.infer<typeof formSchema>;

const FormFields = () => {
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
            placeholder={'Пожалуйста, представьтесь…'}
            label={'Имя'}
            error={form.formState.errors.name}
          />
          <CustomField
            control={form.control}
            name={'email'}
            placeholder={'Напишите свою электронную почту, куда прислать ответ…'}
            label={'E-mail'}
            error={form.formState.errors.email}
          />
          <CustomField
            textArea
            control={form.control}
            name={'text'}
            placeholder={'Пожалуйста, задайте нам вопрос или напишите сообщение…'}
            label={'Как мы можем вам помочь?'}
            error={form.formState.errors.text}
          />
        </div>
        <p className="md:mt-5 mt-4 md:mb-10 mb-6 leading-none text-DGRAY2">
          Поля отмеченные <span className="text-RED_PASTEL">*</span> обязательны для заполнения
        </p>
        <Button type="submit" className="w-full md:mr-[100px]" disabled={loading}>
          {loading ? 'Отправка...' : 'Отправить сообщение'}
        </Button>
        {isSubmitted && (
          <p className="text-lg text-center mt-4 font-semibold text-green-600">
            Сообщение отправленно успешно!
          </p>
        )}
      </form>
    </Form>
  );
};

export default FormFields;
