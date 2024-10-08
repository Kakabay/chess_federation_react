import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { FieldError } from "react-hook-form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  control: any;
  name: string;
  placeholder: string;
  label: string;
  error?: FieldError | undefined;
  textArea?: boolean;
}

const CustomField = ({
  control,
  name,
  placeholder,
  label,
  error,
  textArea,
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("w-full")}>
          <FormLabel className="w-full h3 font-[bitter]">
            {label}
            <span className="text-RED_PASTEL">*</span>
          </FormLabel>
          <FormControl>
            {textArea ? (
              <Textarea
                {...field}
                rows={6}
                placeholder={placeholder}
                className="outline-none"
              />
            ) : (
              <Input
                {...field}
                placeholder={placeholder}
                className="outline-none p-4 md:p-6"
              />
            )}
          </FormControl>
          <motion.div
            initial={{ height: 0 }}
            animate={error ? { height: "fit-content" } : {}}
            transition={{ duration: 0.3 }}
          >
            <FormMessage className="">{error?.message}</FormMessage>
          </motion.div>
        </FormItem>
      )}
    />
  );
};

export default CustomField;
