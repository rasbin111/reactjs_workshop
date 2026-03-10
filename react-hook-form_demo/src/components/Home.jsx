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
      email: "test@email.com",
    }
  });

  const onSubmit = async (data) => {
    try{
      await new Promise((resolve)=>setTimeout(resolve, 1000)) // delay to demonstrate server request response delay
      console.log("Form Data: ", data);
      throw new Error("Why?"); // Demonstration of error got from server
    } catch(error){
      console.log(error)
      setError("root", {message: "This email is already taken:" })
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("name")} />

        <input {...register("email", { required: true })} />
        {errors.email && <span> {errors.email.message} </span>}
        <input
          {...register("age", {
            required: "Age is required",
            min: { value: 18, message: "Must be at least 18" },
            max: { value: 123, message: "This is too old, even for a wizard" },
          })}
        />
        {errors.age && <span> {errors.age.message} </span>}
        <input type="submit" disabled={isSubmitting} value={isSubmitting? "Submitting...": "Submit"}/>
                {errors.root && <span> {errors.root.message} </span>}

      </form>
      {/*  Demo of render in simple react application */}
      <About render={(data)=><p> Introduction: {data} </p>} /> 
    </div>
  );
};

export default Home;
