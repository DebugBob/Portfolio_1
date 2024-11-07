const Portfolio = () => {
  return (
    <div className="flex-wrap">
      <ul className="items-center justify-between ">
        <li className="p-6 m-4 mx-24 flex flex-wrap border border-accent3 shadow-md justify-between hover:border-accent1">
          <h2 className="flex font-bold text-xl p-2 items-center">Project 1</h2>
          <img src="src\images\splitpay.png" alt="Split pay app" className="max-w-64 max-h-64" />
          <p className="p-6">
            This was a project that was done at some point in the past that I took part in. <br/>
            <a href="https://github.com/DebugBob/Split_Pay " 
            target="_blank"
            className="underline text-accent1 hover:text-accent3 visited:text-purple-600">https://github.com/DebugBob/Split_Pay</a>
          </p>
        </li>

        <li className="p-6 m-4 mx-24 flex flex-wrap border border-accent3 shadow-md hover:border-accent1">
        <h2 className="flex font-bold text-xl p-2 items-center">Project 2</h2>
          <p className="p-6">
          Responsive Web Design Project Description: Developed a responsive personal blog using HTML and CSS. Ensured the website adjusts smoothly across various screen sizes and devices. Implemented basic media queries to enhance user experience on mobile, tablet, and desktop.<br/>
            <a href="" 
            target="_blank"
            className="underline text-accent1 hover:text-accent3 visited:text-purple-600"></a>
          </p>
        </li>

        <li className="p-6 m-4 mx-24 flex flex-wrap border border-accent3 shadow-md hover:border-accent1">
        <h2 className="flex font-bold text-xl p-2 items-center">Project 3</h2>
          <p className="p-6">
          Interactive Contact Form Description: Created an interactive contact form for a small business website using HTML, CSS, and JavaScript. Added form validation to ensure users provide the required information correctly. Styled the form to align with the company's branding.
          </p>
        </li>

        <li className="p-6 m-4 mx-24 flex flex-wrap border border-accent3 shadow-md hover:border-accent1">
        <h2 className="flex font-bold text-xl p-2 items-center">Project 4</h2>
          <p className="p-6">
          Simple Product Landing Page Description: Designed and coded a product landing page for a mockup e-commerce website. Used HTML and CSS to create a clean and appealing layout, highlighting key features and call-to-action buttons. Focused on minimalism and usability.
          </p>
        </li>

        <li className="p-6 m-4 mx-24 flex flex-wrap border border-accent3 shadow-md hover:border-accent1">
        <h2 className="flex font-bold text-xl p-2 items-center">Project 5</h2>
          <p className="p-6">
          CSS Animation and Transitions Description: Built a basic portfolio site showcasing my skills, featuring CSS animations and transitions. Implemented hover effects and keyframe animations to bring elements to life. Created a visually engaging experience without overloading the page.
          </p>
        </li>

        <li className="p-6 m-4 mx-24 flex flex-wrap border border-accent3 shadow-md hover:border-accent1">
        <h2 className="flex font-bold text-xl p-2 items-center">Project 6</h2>
          <p className="p-6">
          Basic JavaScript Calculator Description: Developed a basic calculator using HTML, CSS, and JavaScript. Implemented fundamental arithmetic operations like addition, subtraction, multiplication, and division. Ensured the calculator functions correctly and is user-friendly.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Portfolio