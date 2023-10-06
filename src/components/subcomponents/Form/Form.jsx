import react, { useState } from "react";

function Form() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChanges(e) {
    setDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = details;

    if (name && email && message) {
      const res = fetch(
        "https://portfolio-contact-2001-default-rtdb.firebaseio.com/contactRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      if (res) {
        alert("Message sent");
        setDetails({
            name: "",
            email: "",
            message: "",
        }
        );
      } else {
        alert("Please fill data");
      }
    } else {
      alert("Please fill data");
    }
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        onChange={handleChanges}
        value={details.name}
      />
      <input
        type="text"
        name="email"
        placeholder="Your Email"
        onChange={handleChanges}
        value={details.email}
      />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Your Message"
        onChange={handleChanges}
        value={details.message}
      ></textarea>
      <button type="submit" style={{fontFamily:"'Rubik',sans-serif"}}>Submit</button>
    </form>
  );
}

export default Form;
