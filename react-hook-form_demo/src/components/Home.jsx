import { useForm } from "react-hook-form";
import About from "./About";

const Home = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // delay to demonstrate server request response delay
      console.log("Form Data: ", data);
      throw new Error("Why?"); // Demonstration of error got from server, Forcing error for all case
    } catch (error) {
      console.log(error);
      setError("root", { message: "This email is already taken:" });
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: "0.3rem"}}
      >
        <input defaultValue="test" {...register("name")} placeholder="Enter name" />

        <input
        placeholder="Enter Email"
          {...register("email", {
            required: "email required",
            validate: (value) => {
              if (!value.includes("@")) {
                return "Invalid Email";
              }
              return true;
            },
          })}
        />
        {errors.email && <span> {errors.email.message} </span>}
        <input
        placeholder="Enter age"
          {...register("age", {
            required: "Age is required",
            min: { value: 18, message: "Must be at least 18" },
            max: { value: 123, message: "This is too old, even for a wizard" },
          })}
        />
        {errors.age && <span> {errors.age.message} </span>}
        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting..." : "Submit"}
        />
        {errors.root && <span> {errors.root.message} </span>}
      </form>
      {/*  Demo of render in simple react application */}
      <About render={(data) => <p> Introduction: {data} </p>} />
    </div>
  );
};

export default Home;
