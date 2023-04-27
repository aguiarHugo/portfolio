import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  const { target } = e;
  const { name, value } = target;

  setForm({
    ...form,
    [name]: value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

emailjs
  .send(
    import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    {
      from_name: form.name,
      to_name: "Hugo Aguiar",
      from_email: form.email,
      to_email: "aguiarhugofx@gmail.com",
      message: form.message,
    },
    import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
  )
  .then(
    () => {
      setLoading(false)
      alert("Thanks for your message! I'll answers you asap!")

      setForm({
        name: "",
        email: "",
        message: "",
      })
    },
    (error) => {
      setLoading(false)
      console.error(error)
      alert("Ahh, something went wrong, please try again.")
    }
  )
}

return (
  <section
    className=" flex xl:flex-row flex-col-reverse gap-10 overflow-hidden"
  >
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4}}
      transition={{ duration: 0.4 }}
      variants={{ 
        hidden: { opacity:0, x:-100 },
        visible: { opacity:1, x:0 }
    }}
      className='bg-purple-500 p-8 rounded-2xl md:mx-auto md:w-[900px]'
    >
      <h3 className="text-6xl font-bold md:text-start">Contact</h3>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
      >
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Name</span>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder="What is your name?"
            className='bg-purple-400 py-4 px-6 placeholder:text-purple-200 text-white rounded-lg outline-none border-none font-medium'
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your E-mail</span>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder="What is your e-mail?"
            className='bg-purple-400 py-4 px-6 placeholder:text-purple-200 text-white rounded-lg outline-none border-none font-medium'
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Message</span>
          <textarea
            rows={7}
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder='Enter your message'
            className='bg-purple-400 py-4 px-6 placeholder:text-purple-200 text-white rounded-lg outline-none border-none font-medium'
          />
        </label>

        <button
          type='submit'
          className='py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md duration-500 hover:bg-purple-300'
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </motion.div>
  </section>
  );
};

export default Contact