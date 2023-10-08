import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import {
  HomeLayout,
  DashboardLayout,
  Landing,
  Error,
  Login,
  Register,
  Stats,
  AllJobs,
  AddJob,
  EditJob,
  Profile,
  Admin,
} from "./pages";

import { checkDefaultTheme } from "./utils/helpers";

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Landing />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,

            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <AddJob />
              </Suspense>
            ),
          },
          {
            path: "stats",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <Stats />
              </Suspense>
            ),
          },
          {
            path: "all-jobs",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <AllJobs />
              </Suspense>
            ),
          },
          {
            path: "jobs/edit/:id",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <EditJob />
              </Suspense>
            ),
          },
          {
            path: "profile",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <Profile />
              </Suspense>
            ),
          },
          {
            path: "admin",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <Admin />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
