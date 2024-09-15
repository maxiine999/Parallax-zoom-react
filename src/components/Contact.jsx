import React, { useState } from "react";
import { isMobile } from "react-device-detect";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;

    // Basic validation
    if (!firstName || !lastName || !phone || !email || !address || !message) {
      alert("Please fill out all fields");
      return;
    }

    // Optional: More detailed validation (e.g., email format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      const res = await fetch(
        "https://contact-new-james-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );

      if (res.ok) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Your form has been submitted successfully!");
      } else {
        // Log server response for debugging
        const errorData = await res.json();
        console.error("Server response error:", errorData);
        alert(
          "There was a problem with the server response. Please try again later."
        );
      }
    } catch (error) {
      // Log network error for debugging
      console.error("Network error:", error);
      alert(
        "An error occurred while submitting the form. Please check your internet connection and try again."
      );
    }
  };
  return (
    <div
      className="z-10 relative flex mt-20 items-end text-white "
      id="Contact"
    >
      {/* Left content */}
      {!isMobile &&
      
        // Code to run if the user is on a mobile device
        (<div className="w-full md:w-1/2 p-6 flex items-center justify-center ml-10 mb-">
          <div>
            <p className="mb-4 text-[16px]">
              So you reached here! We’re here to offer top-notch support—think
              of us as your service superheroes. Got questions or need a hand?
              Just use the form on the right, and we’ll swoop in to help. this
              is all about your satisfaction which i love hearing from you. So
              go ahead, share your thoughts or concerns—we’re all ears! Thanks
              for choosing us! I'am excited to assist you.
            </p>
            <p className="text-[16px]">
              I'am committed to ensuring your satisfaction. I value your
              feedback and look forward to hearing from you. Thank you for
              choosing us!
            </p>
          </div>
        </div>
      )}
      {/* Right contact form */}
      <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
        <div className="w-full max-w-xl px-4 sm:px-0">
          <div className="shadow-lg rounded-lg p-4 sm:p-6">
            <form method="POST" onSubmit={submitData}>
              <div className="flex flex-col sm:flex-row gap-2 mb-2">
                <input
                  type="text"
                  name="firstName"
                  className="rounded-lg pl-2 border-2 bg-transparent border-white w-full h-[40px] p-2 text-white placeholder-white placeholder:text-sm"
                  placeholder="First Name"
                  value={userData.firstName}
                  onChange={postUserData}
                />
                <input
                  type="text"
                  name="lastName"
                  className="rounded-lg pl-2 border-2 bg-transparent border-white w-full h-[40px] p-2 placeholder-white text-white placeholder:text-sm"
                  placeholder="Last Name"
                  value={userData.lastName}
                  onChange={postUserData}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2 mb-2">
                <input
                  type="text"
                  name="phone"
                  className="rounded-lg pl-2 border-2 bg-transparent border-white w-full h-[40px] p-2 text-white placeholder-white placeholder:text-sm"
                  placeholder="Phone Number"
                  value={userData.phone}
                  onChange={postUserData}
                />
                <input
                  type="email"
                  name="email"
                  className="rounded-lg pl-2 border-2 bg-transparent border-white w-full h-[40px] p-2 text-white placeholder-white placeholder:text-sm"
                  placeholder="Email ID"
                  value={userData.email}
                  onChange={postUserData}
                />
              </div>

              <div className="mb-2">
                <textarea
                  name="address"
                  className="rounded-lg pl-2 border-2 bg-transparent border-white w-full h-[110px] p-2 text-white placeholder-white placeholder:text-sm"
                  placeholder="Address"
                  value={userData.address}
                  onChange={postUserData}
                />
              </div>

              <div className="mb-2">
                <textarea
                  name="message"
                  className="rounded-lg pl-2 border-2 bg-transparent border-white w-full h-[110px] p-2 text-white placeholder-white placeholder:text-sm"
                  placeholder="Enter Your Message"
                  value={userData.message}
                  onChange={postUserData}
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-white text-black py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
