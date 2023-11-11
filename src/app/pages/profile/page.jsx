'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import LoaderPage from "./../../components/LoaderPage";
import ErrorPage from "./../../components/ErrorPage";


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

      {loading && <LoaderPage />}

      {error && <ErrorPage />}

      {!loading && !error && <>
        <div className="min-h-screen bg-gradient-to-b from-gray-200 to-violet-200 flex flex-col justify-center items-center text-center gap-16">


          <div className="font-poppins flex flex-col gap-7 text-violet-800">

            <p className="text-xl lg:text-2xl uppercase tracking-wider font-bold mt-11">Your Profile</p>

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
                <p className="text-base lg:text-2xl">{profile?.emailAddressOfUser}</p>
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

          <div className="min-w-full">

            <p className="text-xl lg:text-2xl uppercase font-bold font-poppins tracking-wider text-violet-800">Your Posts</p>

            <div className="min-w-full flex flex-col gap-1 justify-center items-center">
              {profile?.posts?.map((post) => (
                <div className="uppercase tracking-wider font-bold bg-violet-200 animate duration-150 hover:-translate-y-3 hover:cursor-pointer my-6 py-6 px-8 border-2 border-b-4 rounded-2xl border-violet-700 w-9/12 text-center lg:text-left mb-8 shadow-xl" key={post?.id}>
                  <p className="text-lg lg:text-xl text-violet-800">{post?.title}</p>
                  <p className="mt-4 text-sm text-violet-600">{post?.description}</p>
                  <div className="mt-4 flex justify-between lg:justify-start items-center gap-4 text-base text-violet-800">
                    <div className="py-3 px-4 rounded-full bg-violet-300"> <i className="fa-regular fa-thumbs-up"></i> {post?.noOfLikesOnThePost} </div>
                    <div className="py-3 px-4 rounded-full bg-violet-300"> <i className="fa-regular fa-comment"></i> {post?.noOfCommentsOnThePost} </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </>}

    </>
  )
};

export default Page;