import { send } from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  // const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  // const handleFocus = () => setCurrentAnimation("walk");
  // const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // setCurrentAnimation("hit");

    send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Maryam",
        from_email: form.email,
        to_email: "maryam.esmily78@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setIsLoading(false);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {/* {alert.show && <Alert {...alert} />} */}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <div>
            <label className="text-black-500 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              // onFocus={handleFocus}
              // onBlur={handleBlur}
            />
          </div>
          <div>
            <label className="text-black-500 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="John@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              // onFocus={handleFocus}
              // onBlur={handleBlur}
            />
          </div>
          <div>
            <label className="text-black-500 font-semibold">Your Message</label>
            <textarea
              name="message"
              rows="4"
              className="textarea"
              placeholder="Write your thoughts here..."
              value={form.message}
              onChange={handleChange}
              // onFocus={handleFocus}
              // onBlur={handleBlur}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn"
            // onFocus={handleFocus}
            // onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
