'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { toast } from 'react-toastify';
import Tippy from '@tippyjs/react';

import LoaderPage from "../../components/LoaderPage";
import ErrorPage from "../../components/ErrorPage";
import Navbar from "../../components/Navbar";

const Page = () => {

    const [totalNumberOfPosts, setTotalNumberOfPosts] = useState(0);

    const [allPosts, setAllPosts] = useState([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(false);


    const fetchAllPostsOfUser = async () => {

        try {

            setLoading(true);

            const { data } = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL);

            setAllPosts(data?.profileOfUser?.posts);

            setTotalNumberOfPosts(data?.totalNumberOfPosts);

            setLoading(false);

            setError(false);

            toast.success('all your posts have been fetched successfully', {
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

    }

    useEffect(() => {
        fetchAllPostsOfUser();
    }, []);


    return (
        <>

            {loading && <LoaderPage pagename='Posts' />}

            {error && <ErrorPage />}


            <Navbar />

            <div className="min-h-screen bg-gradient-to-b from-gray-100 to-violet-200 flex flex-col justify-center items-center text-center">

                <div className="font-poppins flex flex-col gap-7 text-violet-800">

                    <p className="text-xl lg:text-2xl uppercase tracking-wider font-bold mt-20">Your Posts</p>

                    <p className="text-base lg:text-lg capitalize font-bold font-poppins tracking-wider text-violet-800 mt-5 mb-4">Total Number of Posts: {totalNumberOfPosts}</p>

                    <div className="min-w-full flex flex-col gap-1 justify-center items-center">
                        {allPosts?.map((post) => (
                            <div className="tracking-wider font-bold bg-violet-100 animate duration-150 hover:-translate-y-3 hover:cursor-pointer mt-3 py-6 px-8 border-2 border-b-4 rounded-2xl border-violet-700 w-9/12 text-center lg:text-left mb-6 shadow-xl" key={post?.id}>
                                <p className="text-lg lg:text-xl text-violet-800 uppercase">{post?.title}</p>
                                <p className="mt-4 text-sm text-violet-600">{post?.description}</p>
                                <div className="mt-4 flex justify-between lg:justify-start items-center gap-4 text-base text-violet-800">
                                    <Tippy content='Total number of likes on the post'>
                                        <div className="py-3 px-4 rounded-full bg-violet-300"> <i className="fa-regular fa-thumbs-up"></i> {post?.noOfLikesOnThePost} </div>
                                    </Tippy>
                                    <Tippy content='Total number of comments on the post'>
                                        <div className="py-3 px-4 rounded-full bg-violet-300"> <i className="fa-regular fa-comment"></i> {post?.noOfCommentsOnThePost} </div>
                                    </Tippy>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <Link href='/pages/userprofile'>
                    <button className="bg-violet-200 hover:bg-violet-300 hover:cursor-pointer duration-200 mt-6 mb-8 border-4 py-4 w-72 shadow-xl rounded-xl font-poppins tracking-widest uppercase text-xl font-bold text-violet-800 border-violet-800">Back to Profile</button>
                </Link>

            </div>

        </>
    )
}

export default Page;