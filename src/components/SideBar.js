import React from "react";

function SideBar() {
  return (
    <>
      <div class="col-sm-3 mx-4">
        <ul class="nav nav-pills flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Dashboard
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Contacts
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Todo
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Calendar
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              Help
            </a>
          </li>
        </ul>
        <hr class="d-sm-none" />
      </div>
      <div class="col-sm-8">

      </div>
    </>
  );
}

// import "bootstrap/dist/css/bootstrap.min.css";

// function SideBarLabel() {
//     return (
//  <div
//             className="offcanvas-md offcanvas-end bg-body-tertiary"
//             tabindex="-1"
//             id="sidebarMenu"
//             aria-labelledby="sidebarMenuLabel"
//           >
//             <div className="offcanvas-header">
//               <h5 className="offcanvas-title" id="sidebarMenuLabel">
//                 Company name
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="offcanvas"
//                 data-bs-target="#sidebarMenu"
//                 aria-label="Close"
//               ></button>
//             </div>
//     );
// }

// function SideBar() {
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
//           <div
//             className="offcanvas-md offcanvas-end bg-body-tertiary"
//             tabindex="-1"
//             id="sidebarMenu"
//             aria-labelledby="sidebarMenuLabel"
//           >
//             <div className="offcanvas-header">
//               <h5 className="offcanvas-title" id="sidebarMenuLabel">
//                 Company name
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="offcanvas"
//                 data-bs-target="#sidebarMenu"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
//               <ul className="nav flex-column">
//                 <li className="nav-item">
//                   <a
//                     className="nav-link d-flex align-items-center gap-2 active"
//                     aria-current="page"
//                     href="#Dashboard"
//                   >
//                     {/* <svg className="bi">
//                     <use xlinkHref="#house-fill"></use>
//                   </svg> */}
//                     {/* <svg className="bi">
//                       <use xlinkHref="#house-fill"></use>
//                     </svg> */}
//                     Dashboard
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link d-flex align-items-center gap-2"
//                     href="#Orders"
//                   >
//                     {/* <svg className="bi">
//                       <use xlinkHref="#file-earmark"></use>
//                     </svg> */}
//                     Orders
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link d-flex align-items-center gap-2"
//                     href="#Products"
//                   >
//                     {/* <svg className="bi">
//                       <use xlinkHref="#cart"></use>
//                     </svg> */}
//                     Products
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link d-flex align-items-center gap-2"
//                     href="#Customers"
//                   >
//                     {/* <svg className="bi">
//                       <use xlinkHref="#people"></use>
//                     </svg> */}
//                     Customers
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link d-flex align-items-center gap-2"
//                     href="#Reports"
//                   >
//                     {/* <svg className="bi">
//                       <use xlinkHref="#graph-up"></use>
//                     </svg> */}
//                     Reports
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link d-flex align-items-center gap-2"
//                     href="#Integrations"
//                   >
//                     {/* <svg className="bi">
//                       <use xlinkHref="#puzzle"></use>
//                     </svg> */}
//                     Integrations
//                   </a>
//                 </li>
//               </ul>

//               <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
//                 <span>Saved reports</span>
//                 <a
//                   className="link-secondary"
//                   href="#Saved reports"
//                   aria-label="Add a new report"
//                 >
//                   {/* <svg className="bi">
//                     <use xlinkHref="#plus-circle"></use>
//                   </svg> */}
//                 </a>
//               </h6>
//               <ul className="nav flex-column mb-auto">
//                 <li className="nav-item">
//                   <a
//                     className="nav-link d-flex align-items-center gap-2"
//                     href="#"
//                   >
//                     <svg className="bi">
//                       <use xlinkHref="#file-earmark-text"></use>
//                     </svg>
//                     Current month
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link d-flex align-items-center gap-2"
//                     href="#"
//                   >
//                     <svg className="bi">
//                       <use xlinkHref="#file-earmark-text"></use>
//                     </svg>
//                     Last quarter
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link d-flex align-items-center gap-2"
//                     href="#"
//                   >
//                     <svg className="bi">
//                       <use xlinkHref="#file-earmark-text"></use>
//                     </svg>
//                     Social engagement
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     classNameName="nav-link d-flex align-items-center gap-2"
//                     href="#"
//                   >
//                     <svg className="bi">
//                       <use xlinkHref="#file-earmark-text"></use>
//                     </svg>
//                     Year-end sale
//                   </a>
//                 </li>
//               </ul>

//               <hr className="my-3" />
//                 <ul className="nav flex-column mb-auto">
//                   <li className="nav-item">
//                     <a
//                       classNameName="nav-link d-flex align-items-center gap-2"
//                       href="#"
//                     >
//                       <svg className="bi">
//                         <use xlinkHref="#gear-wide-connected"></use>
//                       </svg>
//                       Settings
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a
//                       classNameName="nav-link d-flex align-items-center gap-2"
//                       href="#"
//                     >
//                       <svg className="bi">
//                         <use xlinkHref="#door-closed"></use>
//                       </svg>
//                       Sign out
//                     </a>
//                   </li>
//                 </ul>
//               {/* </hr> */}
//             </div>
//           </div>
//         </div>

//         <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
//           <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
//             <h1 className="h2">Dashboard</h1>
//             <div className="btn-toolbar mb-2 mb-md-0">
//               <div className="btn-group me-2">
//                 <button
//                   type="button"
//                   className="btn btn-sm btn-outline-secondary"
//                 >
//                   Share
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-sm btn-outline-secondary"
//                 >
//                   Export
//                 </button>
//               </div>
//               <button
//                 type="button"
//                 className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1"
//               >
//                 <svg className="bi">
//                   <use xlinkHref="#calendar3"></use>
//                 </svg>
//                 This week
//               </button>
//             </div>
//           </div>

//           {/* <canvas
//             className="my-4 w-100"
//             id="myChart"
//             width="1970"
//             height="832"
//             style={{
//               display: "block",
//               boxSizing: "border-box",
//               height: "416px",
//               width: "985px",
//             }}
//           ></canvas> */}

//           {/* <h2>Section title</h2>
//           <div className="table-responsive small">
//             <table className="table table-striped table-sm">
//               <thead>
//                 <tr>
//                   <th scope="col">#</th>
//                   <th scope="col">Header</th>
//                   <th scope="col">Header</th>
//                   <th scope="col">Header</th>
//                   <th scope="col">Header</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>1,001</td>
//                   <td>random</td>
//                   <td>data</td>
//                   <td>placeholder</td>
//                   <td>text</td>
//                 </tr>
//                 <tr>
//                   <td>1,002</td>
//                   <td>placeholder</td>
//                   <td>irrelevant</td>
//                   <td>visual</td>
//                   <td>layout</td>
//                 </tr>
//                 <tr>
//                   <td>1,003</td>
//                   <td>data</td>
//                   <td>rich</td>
//                   <td>dashboard</td>
//                   <td>tabular</td>
//                 </tr>
//                 <tr>
//                   <td>1,003</td>
//                   <td>information</td>
//                   <td>placeholder</td>
//                   <td>illustrative</td>
//                   <td>data</td>
//                 </tr>
//                 <tr>
//                   <td>1,004</td>
//                   <td>text</td>
//                   <td>random</td>
//                   <td>layout</td>
//                   <td>dashboard</td>
//                 </tr>
//                 <tr>
//                   <td>1,005</td>
//                   <td>dashboard</td>
//                   <td>irrelevant</td>
//                   <td>text</td>
//                   <td>placeholder</td>
//                 </tr>
//                 <tr>
//                   <td>1,006</td>
//                   <td>dashboard</td>
//                   <td>illustrative</td>
//                   <td>rich</td>
//                   <td>data</td>
//                 </tr>
//                 <tr>
//                   <td>1,007</td>
//                   <td>placeholder</td>
//                   <td>tabular</td>
//                   <td>information</td>
//                   <td>irrelevant</td>
//                 </tr>
//                 <tr>
//                   <td>1,008</td>
//                   <td>random</td>
//                   <td>data</td>
//                   <td>placeholder</td>
//                   <td>text</td>
//                 </tr>
//                 <tr>
//                   <td>1,009</td>
//                   <td>placeholder</td>
//                   <td>irrelevant</td>
//                   <td>visual</td>
//                   <td>layout</td>
//                 </tr>
//                 <tr>
//                   <td>1,010</td>
//                   <td>data</td>
//                   <td>rich</td>
//                   <td>dashboard</td>
//                   <td>tabular</td>
//                 </tr>
//                 <tr>
//                   <td>1,011</td>
//                   <td>information</td>
//                   <td>placeholder</td>
//                   <td>illustrative</td>
//                   <td>data</td>
//                 </tr>
//                 <tr>
//                   <td>1,012</td>
//                   <td>text</td>
//                   <td>placeholder</td>
//                   <td>layout</td>
//                   <td>dashboard</td>
//                 </tr>
//                 <tr>
//                   <td>1,013</td>
//                   <td>dashboard</td>
//                   <td>irrelevant</td>
//                   <td>text</td>
//                   <td>visual</td>
//                 </tr>
//                 <tr>
//                   <td>1,014</td>
//                   <td>dashboard</td>
//                   <td>illustrative</td>
//                   <td>rich</td>
//                   <td>data</td>
//                 </tr>
//                 <tr>
//                   <td>1,015</td>
//                   <td>random</td>
//                   <td>tabular</td>
//                   <td>information</td>
//                   <td>text</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div> */}
//         </main>
//       </div>
//     </div>
//   );
// }

export default SideBar;
