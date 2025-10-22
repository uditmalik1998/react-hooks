const FormData = () => {
  const submitHandler = (formData) => {
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    console.log(userData);
  };
  return (
    <form action={submitHandler}>
      <label htmlFor="name">Name:</label>
      <input name="name" id="name" type="text" />
      <label htmlFor="email">Email</label>
      <input name="email" type="email" id="email" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormData;
