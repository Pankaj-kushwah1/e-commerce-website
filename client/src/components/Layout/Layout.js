// import React from 'react';
// import Footer from './Footer';
// import Header from './Header';
// import { Helmet } from "react-helmet";
// import { Toaster } from 'react-hot-toast';
// const  Layout = ({children,title,description ,keywordrs,author})=> {
//   return (
//     <div>
//       <Helmet>
//         <meta charSet="utf-8" />

//         <div>
//           <div>
//   <meta charSet="UTF-8" />
//   <meta name="description" content={description} />
//   <meta name="keywords" content={
//     keywordrs
//   } />
//   <meta name="author" content={author} />
// </div>

//         </div>
//         <title>{title}</title>
//         {/* <link rel="canonical" href="http://mysite.com/example" /> */}
//       </Helmet>
//       <Header />
//       <main style={{ minHeight: "70vh" }}>
//         <Toaster/>
//         {children}
//       </main>
//       <Footer />
//     </div>
//   );
// }


// Layout.defaultProps ={

//   title:"Ecommerce app-shop now",
//   description:"Mern stack project",
//   keywordrs:"mern ,react,node,mongodb",
//   author:"Pankaj Kushwah"
// }

// export default Layout;



import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />

        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Techinfoyt",
};

export default Layout;