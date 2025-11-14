// import React from 'react'

// const Lable = ({text}) => {
//   return (
//     <p className={"LableText"}>{text}</p>
//   )
// }

// export default Lable



import React from 'react'

const Lable = ({ text, className, optnulvalue }) => {
  return (
    <>

      <p className={`LableText ${className}`}>{text}</p>
      <p className={`optnulvalue ${className}`}>{optnulvalue}</p>
    </>
  )
}

export default Lable