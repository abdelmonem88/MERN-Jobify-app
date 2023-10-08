import React from "react";

const HomeLayout = React.lazy(() => import("./HomeLayout"));
const DashboardLayout = React.lazy(() => import("./DashboardLayout"));
const Landing = React.lazy(() => import("./Landing"));
const Register = React.lazy(() => import("./Register"));
const Login = React.lazy(() => import("./Login"));
const Error = React.lazy(() => import("./Error"));
const Stats = React.lazy(() => import("./Stats"));
const AllJobs = React.lazy(() => import("./AllJobs"));
const AddJob = React.lazy(() => import("./AddJob"));
const EditJob = React.lazy(() => import("./EditJob"));
const Profile = React.lazy(() => import("./Profile"));
const Admin = React.lazy(() => import("./Admin"));

export {
  HomeLayout,
  DashboardLayout,
  Landing,
  Register,
  Login,
  Error,
  Stats,
  AllJobs,
  AddJob,
  EditJob,
  Profile,
  Admin,
};
