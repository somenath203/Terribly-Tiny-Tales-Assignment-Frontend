'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import Tippy from '@tippyjs/react';
import Link from 'next/link';

import LoaderPage from "../../components/LoaderPage";
import ErrorPage from "../../components/ErrorPage";
import Navbar from "../../components/Navbar";

const Page = () => {

  const [profile, setProfile] = useState({});

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);


  const fetchUserProfile = async () => {

    try {

      setLoading(true);

      const { data } = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL);

      setProfile(data?.profileOfUser);

      setLoading(false);

      setError(false);

      toast.success(data?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    } catch (error) {

      setLoading(false);

      setError(true);

      toast.error(error?.response?.data?.message ? error?.response?.data?.message : 'Something went wrong!! Please try again!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    };

  };



  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <>

      {loading && <LoaderPage pagename='Profile' />}

      {error && <ErrorPage />}

      {!loading && !error && <>

        <Navbar />

        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-violet-200 flex flex-col items-center text-center">


          <div className="font-poppins flex flex-col gap-7 text-violet-800">

            <p className="text-xl lg:text-2xl uppercase tracking-wider font-bold mt-16">Your Profile</p>

            <div className="flex flex-col gap-5 font-bold tracking-wider mt-8">

              <div className="w-40 block m-auto">
                <Tippy content={'Profile Picture of the User'}>
                  <img src={profile?.imageOfUser} alt="profile pic" className="p-6 bg-violet-200 rounded-full" />
                </Tippy>
              </div>

              <Tippy content={'Full Name of the User'}>
                <p className="text-xl  lg:text-3xl">{profile?.fullNameOfUser}</p>
              </Tippy>

              <Tippy content={'Email Address of the User'}>
                <p className="text-base lg:text-xl font-semibold">{profile?.emailAddressOfUser}</p>
              </Tippy>

              <div className="flex gap-4 text-lg lg:text-2xl justify-center items-center">
                <Tippy content={'Total number of likes on User\'s profile'}>
                  <p> <i className="fa-regular fa-thumbs-up text-blue-700"></i> {profile?.numberOfLikes} </p>
                </Tippy>
                <Tippy content={'Total number of views on User\'s profile'}>
                  <p> <i className="fa-regular fa-eye text-gray-700"></i> {profile?.numberOfViews} </p>
                </Tippy>
                <Tippy content={'Total number of hearts on User\'s profile'}>
                  <p> <i className="fa-regular fa-heart text-pink-700"></i> {profile?.numberOfHearts} </p>
                </Tippy>
              </div>

            </div>

          </div>

          <Link href='/pages/userposts'>
            <button className="bg-violet-200 hover:bg-violet-300 shadow-lg hover:cursor-pointer duration-200 mt-8 mb-6 border-4 py-4 w-56 rounded-xl font-poppins tracking-widest uppercase text-xl font-bold text-violet-800 border-violet-800">All Posts</button>
          </Link>

        </div>

      </>}

    </>
  )
};

export default Page;