# Terribly Tiny Tales Assignment Frontend

## Contents

- [Introduction](#Introduction)
- [About the Frontend Of the Project](#About-The-Frontend-Of-The-Project)
- [About the Backend Of the Project](#About-The-Backend-Of-The-Project)
- [Deployment](#Deployment)
- [Links](#Links)
- [Demo Video Of The Whole Project](#Demo-Video-Of-The-Whole-Project)

## Introduction
This is the assignment of Tiny Tales which renders a profile screen. The profile screen contains the following things:
01) Full name of the user.
02) The email-ID of the user.
03) The profile picture of the user.
04) The total number of likes on the user's profile.
05) The total number of views on the user's profile.
06) The total number of hearts on the user's profile.

The profile page is followed by another page which contains all the posts created by the user.

## About The Frontend Of The Project
The project contains two parts i.e. frontend and backend. 

The project's frontend is built with Next.js v14.0.2 and styled with TailwindCSS. All icons of the project are taken from FontAwesome, and the tippy and toast notifications are handled by @tippyjs/react and React-Toastify, respectively.

The frontend contains two pages and three components. The two pages are Profile Page and the Posts Page. The Profile page containsd all the information about the user and the Post page contains all the post made by the user. The three compoonents used in the frontend of the project are ErrorPage, LaoderPage and Navbar. Navbar is the navigation bar of the project. Errorpage is the page which renders whenever there is an error and the LoaderPage renders when any information is been fetched from backend.

## About the Backend Of The Project
The backend of the project is created with the help of ExpressJS. The backend API contains the JSON data which contains the whole information about the user i.e. the fullname of the user, the emailID of the user, the total number of likes on user's post, the total number of views on user's post and the total number of hearts on user's post and all the posts made by the user.

#### Here is the code of the Backend API: https://github.com/somenath203/Terribly-Tiny-Tales-Assignment-Backend

## Deployment
The frontend of the project is deployed in Vercel and the backend is deployed on Render.

## Links

01) Live Preview: https://terribly-tiny-tales-assignment-frontend.vercel.app/
02) Deployed Backend API: https://terribly-tiny-tales-back.onrender.com/get-profile-of-user
03) GItHub Repo of the Backend API: https://github.com/somenath203/Terribly-Tiny-Tales-Assignment-Backend

## Demo Video Of The Whole Project

![Video](./projectdemo.mp4)