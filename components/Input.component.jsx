import { Field } from "formik";

export const Input = ({
  type = "type",
  name = "name",
  placeholder = "Enter your Email Address",
}) => {
  return (
    <Field name={name}>
      {({ field, meta }) => {
        const isError = meta.touched && meta.error;
        const className = isError
          ? "border border-solid border-[#ff0000] rounded-[12px] bg-[#F8F9FA]"
          : " border border-solid rounded-[12px] bg-[#F8F9FA]";
        return (
          <div>
            <input
              {...field}
              id={name}
              type={type}
              name={name}
              placeholder={placeholder}
              className={`${className} text-[14px] py-[14px] px-[20px] opacity-100 text-[#525252] bg-[#fff] w-full`}
              value={field.value}
            />

            <p className=" text-[1.2rem] text-red-500">
              {meta.touched && meta.error ? meta.error : <>&nbsp;</>}
            </p>
          </div>
        );
      }}
    </Field>
  );
};
