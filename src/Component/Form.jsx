import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // handle input change
  const handleChange = (e) => {
    let { name, value } = e.target;

    // mobile number special case
    if (name === "mobile") {
      // only digits allowed
      value = value.replace(/\D/g, "");
      // limit to 10 digits
      if (value.length > 10) value = value.slice(0, 10);
    }

    setFormData({ ...formData, [name]: value });
  };

  // validation function
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile must be exactly 10 digits";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      localStorage.setItem("User", JSON.stringify(formData));
      alert("Register successfully done!");
      setFormData({ name: "", mobile: "", email: "", password: "" });
      setErrors({});
    }
  };

  return (
    <section className="p-20 h-auto flex justify-center">
      <form onSubmit={handleSubmit}>
        <div className="bg-black text-white flex flex-col gap-8 w-103 p-10 h-auto justify-center rounded">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label>Enter your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter the Fullname"
              className="w-80 bg-white text-black border p-1.5 rounded"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          </div>

          {/* Mobile */}
          <div className="flex flex-col gap-2">
            <label>Enter your Mobile</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter 10 digit Mobile"
              className="w-80 bg-white text-black border p-1.5 rounded"
              maxLength="10" // safety
            />
            {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile}</span>}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label>Enter Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="react@gmail.com"
              className="w-80 bg-white text-black border p-1.5 rounded"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label>Enter your password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-80 bg-white text-black border p-1.5 rounded"
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
          </div>

          {/* Submit */}
          <div className="flex justify-center bg-blue-600 text-white p-2 rounded">
            <button type="submit">Register</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
