import React, { useState } from 'react';
import errorImage from './assets/icon-error.svg';
function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    success: false
  });

  const [errors, setErrors] = useState({});

  function handelInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handelOnSubmit(e) {
    e.preventDefault();

    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name Cannot be Empty';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name Cannot be Empty';
    if (!formData.email.trim()) newErrors.email = 'Email Add. Cannot be Empty';
    if (!formData.password.trim()) newErrors.password = 'Password Cannot be Empty';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setFormData(prevState => ({
        ...prevState,
        success: true
      }));
    
      setTimeout(() => {
        setFormData(prevState => ({
          ...prevState, 
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          success: false
        }));
      }, 2000); 
    }
  }
  return (
    <>
      <main className=" bg-smallSize bg-center bg-cover min-h-screen h-full flex justify-center items-center lg:bg-largeSize">
        <section className="h-full min-h-screen bg-[#ff0707] py-10 w-full bg-opacity-50 flex justify-center items-center flex-col gap-5 text-center text-gray-50 px-7 md:px-20 lg:flex-row lg:text-start xl:px-40 xl:gap-24 2xl:px-80">
          <div className="lg:w-1/2 lg:flex lg:flex-col lg:gap-10 xl:w-[43%]">
            <h1 className="text-2xl font-semibold  px-14 lg:px-0 lg:text-5xl">
              Learn to code by watching others
            </h1>
            <p>
              See how experienced developers solve problems in real-time. Watching
              scripted tutorials is great, but understanding how developers think is
              invaluable.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-5  md:w-[70%] lg:w-1/2 xl:w-[40%]">
            <button className="bg-[#6055a5] w-full py-3 rounded-lg px-10 font-light">
              <span className="font-semibold">
                Try it free 7 days <br></br>
              </span>
              then $20/mo. thereafter
            </button>
            <form
              onSubmit={handelOnSubmit}
              className="border bg-white flex justify-center items-start flex-col gap-8 p-4 rounded-lg xl:w-full transition-all duration-300 ease-in-out text-gray-600 relative"
            >
              <h3 className={`absolute -top-32 ${formData.success ? "opacity-100 -translate-y-2" : " opacity-0 translate-y-0"} font-medium text-xl text-red-100 tracking-wider transition-all duration-300 ease-in-out`}>Your Form Submitted Successfully !!!</h3>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handelInputChange}
                placeholder="First Name"
                className={`${
                  errors.firstName ? 'border-red-500' : ''
                } focus:outline-gray-200 border w-full p-3  rounded-md   transition-all duration-200 ease-in-out outline-none`}
              />
              <p className={`text-red-500 text-sm absolute top-[4.5rem] right-10 ${errors.firstName ? " opacity-100 translate-y-0" : "opacity-0 -translate-y-2"} transition-all duration-300 ease-in-out `}>
                {errors.firstName}
              </p>
              <span className={`absolute top-[1.83rem] right-10 ${errors.firstName ? " opacity-100 translate-x-0" : "opacity-0 translate-x-2"} transition-all duration-300 ease-in-out `}><img src={errorImage} alt="Error" /></span>

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handelInputChange}
                placeholder="Last Name"
                className={`${
                  errors.lastName ? 'border-red-500' : ''
                } focus:outline-gray-200 border w-full p-3  rounded-md   transition-all duration-200 ease-in-out outline-none`}
              />
              <p className={`text-red-500 text-sm absolute top-[9.5rem] right-10 ${errors.lastName ? " opacity-100 translate-y-0" : "opacity-0 -translate-y-2"} transition-all duration-300 ease-in-out `}>
                {errors.lastName}
              </p>

              <span className={`absolute top-[6.9rem] right-10 ${errors.lastName ? " opacity-100 translate-x-0" : "opacity-0 translate-x-2"}  transition-all duration-300 ease-in-out `}><img src={errorImage} alt="Error" /></span>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handelInputChange}
                placeholder="Email Address"
                className={`${
                  errors.email ? 'border-red-500' : ''
                } focus:outline-gray-200 border w-full p-3  rounded-md   transition-all duration-200 ease-in-out outline-none`}
              />
              <p
                className={`text-red-500 text-sm absolute top-[14.5rem] ${
                  errors.email ? ' opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                } transition-all duration-300 ease-in-out  right-10`}
              >
                {errors.email}
              </p>
              <span className={`absolute top-[12rem] ${errors.email ? " opacity-100 translate-x-0" : "opacity-0 translate-x-2"} right-10   transition-all duration-300 ease-in-out `}><img src={errorImage} alt="Error" /></span>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handelInputChange}
                placeholder="Password"
                className={`${
                  errors.password ? 'border-red-500' : ''
                } focus:outline-gray-200 border w-full p-3  rounded-md   transition-all duration-200 ease-in-out outline-none`}
              />
              <p
                className={`text-red-500 text-sm absolute top-[19.6rem] ${
                  errors.password
                    ? ' opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-2'
                } transition-all duration-300 ease-in-out right-10`}
              >
                {errors.password}
              </p>
              <span className={`absolute top-[17.13rem] ${errors.password ? " opacity-100 translate-x-0" : "opacity-0 translate-x-2"} right-10   transition-all duration-300 ease-in-out `}><img src={errorImage} alt="Error" /></span>

              <button className="bg-[#38cc8c] w-full rounded-md py-4 text-gray-50 shadow-md hover:bg-opacity-75 transition-all duration-300 ease-in-out hover:-translate-y-1">
                Claim your free trail
              </button>
              <p className="border-none text-gray-400">
                By clicking the button yor are agreeing to our
                <span className="text-[#ff0707] font-semibold text-opacity-50 hover:border-b-[#ff0707ec] hover:border-b hover:text-[#ff0707ec] transition-all duration-200 ease-in-out cursor-pointer">
                  {' '}
                  Terms and Services
                </span>
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
