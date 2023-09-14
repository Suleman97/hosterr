import { Animate, Button, Input } from "~/components";
import * as yup from "yup";
import { Form, Formik } from "formik";

const emailValidation = yup.object().shape({
  email: yup.string().email("Email is invalid!").required("Email is required."),
});

export const Banner = () => {
  return (
    <section className=" font-body bg-right bg-[#f9f4e8] pt-[50px] md:py-[50px] px-[20px]">
      <div className="max-w-[1200px] xl:min-h-[65vh] 2xl:min-h-[70vh] m-auto flex flex-col 2xl:items-center xl:flex-row gap-[20px] xl:gap-[100px]">
        <div className="xl:hidden w-[40%] min-h-[20vh] md:min-h-[35vh] m-auto">
          <div className="relative">
            <img
              className="absolute top-0 left-0 animate-image-one rotat-one w-[420px]"
              src="/svg/blue.svg"
              alt="blue"
            />

            <img
              className="absolute top-4 left-4 animate-image-two rotat-two w-[420px]"
              src="/svg/pink.svg"
              alt="pink"
            />
            <img
              className="absolute top-8 left-8 rotat-three animate-image-three w-[430px]"
              src="/svg/purple.svg"
              alt="purple"
            />
            <img
              className="absolute top-8 left-6 w-[450px] rotat-four"
              src="/hero-img.png"
              alt="purple"
            />
          </div>
        </div>

        <div className="font-body flex flex-col gap-[10px] justify-center">
          <Animate>
            <h1 className="text-[#14213D] text-[44px] md:text-[62px] font-[700] xl:max-w-[650px] font-heading md:leading-[1.125]">
              Host your website in less than 5 minutes.
            </h1>
          </Animate>
          <Animate>
            <p className="text-[#525252] text-[20px] font-[300] xl:max-w-[530px] font-body">
              With Hosterr, get your website up and running in no less than 5
              minutes with the most competitive packages availabale online.
            </p>
          </Animate>
          <div className="">
            <Formik
              initialValues={{
                email: "",
              }}
              onSubmit={(e) => {
                console.log(e);
              }}
              validationSchema={emailValidation}
            >
              <Form>
                <div className="grid md:grid-cols-[40%_20%] xl:grid-cols-[60%_25%] md:items-start md:gap-[12px] w-full">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter e-mail Address"
                  />
                  <Button />
                </div>
              </Form>
            </Formik>
          </div>
          <div className="flex gap-[12px] items-center">
            <img src="/svg/check.svg" alt="Check Box" />
            <p className="text-[#525252] text-[20px] font-[300] max-w-[530px] font-body">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
        <div className="hidden xl:block w-[40%] min-h-[50vh]">
          <div className="relative">
            <img
              className="absolute top-0 left-0 animate-image-one rotat-one w-[420px]"
              src="/svg/blue.svg"
              alt="blue"
            />

            <img
              className="absolute top-4 left-4 animate-image-two rotat-two w-[420px]"
              src="/svg/pink.svg"
              alt="pink"
            />
            <img
              className="absolute top-8 left-8 rotat-three animate-image-three w-[430px]"
              src="/svg/purple.svg"
              alt="purple"
            />
            <img
              className="absolute top-8 left-6 w-[450px] rotat-four"
              src="/hero-img.png"
              alt="purple"
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] m-auto flex flex-col md:flex-row gap-[20px] justify-between pt-[60px]">
        <div className="flex gap-[20px] ">
          <a className="text-[20px] md:px-[16px] md:py-[10px] text-[#525252] font-[500] cursor-pointer font-body transition-all duration-500 hover:font-[600]">
            Facebook
          </a>
          <a className="text-[20px] md:px-[16px] md:py-[10px] text-[#525252] font-[500] cursor-pointer font-body transition-all duration-500 hover:font-[600]">
            Instagram
          </a>
          <a className="text-[20px] md:px-[16px] md:py-[10px] text-[#525252] font-[500] cursor-pointer font-body transition-all duration-500 hover:font-[600]">
            Twitter
          </a>
        </div>
        <div className="flex items-center  gap-[12px]">
          <img src="/svg/avatar.svg" alt="Avatar" />
          <p className="text-[#525252] text-[20px] font-[300] max-w-[530px] font-body">
            Have any Question? <br />
            <b>Talk to a specialist</b>
          </p>
        </div>
      </div>
    </section>
  );
};
