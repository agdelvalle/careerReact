import React, { useState } from "react";

// const getJobs = () =>
//   fetch("https://ecomm-service.herokuapp.com/job?limit=5").then((res) =>
//     res.json()
//   );


export const CareersList = (props) => {
    // const [jobs, setJobs] = React.useState(undefined)
    const [jobs, setJobs] = React.useState([
        {
          "descriptions": [
            "Central"
          ],
          "requirements": [
            "synergize transparent portals",
            "drive B2C networks"
          ],
          "_id": "random-id-1",
          "title": "Regional Accountability Developer",
          "department": "UI/UX Design",
          "level": "entry",
          "summary": "Future",
          "headcount": 3,
          "createdAt": "2021-12-13T14:07:15.122Z",
          "updatedAt": "2021-12-13T14:07:15.122Z",
          "__v": 0
        },
        {
          "descriptions": [
            "Corporate"
          ],
          "requirements": [
            "benchmark back-end infrastructures",
            "envisioneer integrated channels"
          ],
          "_id": "random-id-2",
          "title": "Human Optimization Consultant",
          "department": "Consulting",
          "level": "internship",
          "summary": "Regional",
          "headcount": 6,
          "createdAt": "2021-12-13T14:07:15.111Z",
          "updatedAt": "2021-12-13T14:07:15.111Z",
          "__v": 0
        },
        {
          "descriptions": [
            "District"
          ],
          "requirements": [
            "innovate rich metrics",
            "disintermediate killer ROI"
          ],
          "_id": "random-id-3",
          "title": "Forward Directives Agent",
          "department": "UI/UX Design",
          "level": "entry",
          "summary": "National",
          "headcount": 7,
          "createdAt": "2021-12-13T14:07:14.629Z",
          "updatedAt": "2021-12-13T14:07:14.629Z",
          "__v": 0
        },
        {
          "descriptions": [
            "Corporate"
          ],
          "requirements": [
            "syndicate 24/7 portals",
            "innovate compelling e-commerce"
          ],
          "_id": "random-id-4",
          "title": "International Applications Associate",
          "department": "Consulting",
          "level": "internship",
          "summary": "Dynamic",
          "headcount": 9,
          "createdAt": "2021-12-13T14:07:14.619Z",
          "updatedAt": "2021-12-13T14:07:14.619Z",
          "__v": 0
        },
        {
          "descriptions": [
            "District"
          ],
          "requirements": [
            "matrix out-of-the-box methodologies",
            "optimize sexy web-readiness"
          ],
          "_id": "random-id-5",
          "title": "Internal Markets Planner",
          "department": "Corporate Functions",
          "level": "internship",
          "summary": "International",
          "headcount": 9,
          "createdAt": "2021-12-13T14:07:14.610Z",
          "updatedAt": "2021-12-13T14:07:14.610Z",
          "__v": 0
        }
      ])

    return <div>
        <div>
            <ul class="md:flex-1 space-y-3">
              {jobs && jobs.map((job) => (
                              <li class="js-career-item">
                              <div class="bg-white shadow overflow-hidden sm:rounded-md">
                                <div class="px-4 py-4 flex items-center sm:px-6">
                                  <div
                                    class="
                                      min-w-0
                                      flex-1
                                      sm:flex sm:items-center sm:justify-between
                                    "
                                  >
                                    <div>
                                      <div
                                        class="
                                          text-sm
                                          leading-5
                                          font-medium
                                          text-pink-600
                                          truncate
                                        "
                                      >
                                        { job.title }
                                        <span class="ml-1 font-normal text-gray-500"
                                          >in { job.department }
                                        </span>
                                      </div>
                                      <div class="mt-2 flex">
                                        <div
                                          class="
                                            flex
                                            items-center
                                            gap-2
                                            text-sm
                                            leading-5
                                            text-gray-500
                                          "
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                              clip-rule="evenodd"
                                            ></path>
                                            <path
                                              d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
                                            ></path></svg
                                          >
                                          {job.level == "internship" ?
                                          <> 
                                          <span>Level: { job.level } </span>
                                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            Student-friendly
                                          </span>
                                          </>
                                        : <span>Level: { job.level } </span> }
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="
                                      ml-5
                                      flex-shrink-0
                                      inline-flex
                                      items-center
                                      justify-center
                                      gap-2
                                    "
                                  >
                                    <button
                                      type="button"
                                      class="
                                        js-delete-btn
                                        p-1
                                        rounded-full
                                        hover:bg-gray-50
                                        focus:outline-none
                                        focus:bg-gray-50
                                        focus:ring
                                        focus:ring-pink-500
                                        focus:ring-opacity-30
                                        transition
                                        duration-150
                                        ease-in-out
                                      "
                                      title="Delete"
                                    >
                                      <svg
                                        class="w-5 h-5 text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                          clip-rule="evenodd"
                                        ></path>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
              ))}
            </ul>
            </div>
    </div>
}
