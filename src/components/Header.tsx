
// About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
const Header = () => {
  return (
<header className="flex items-center justify-between flex-wrap bg-primary p-2 text-white w-full">
    <div className="flex items-center font-bold text-2xl  max-w-screen-xl p-4 gap-6">
        <img src="src\images\generic_cartoon_web_development_logo-removebg-preview.png" className="max-h-8"/>
        Robert Astorino
    </div>
    <ul className="flex">
        <li className="mr-6 active active:accent-accent1">
            <a href="/" className="p-2 rounded-md hover:bg-secondary ">About</a>
        </li>
        <li className="mr-6">
            <a href="./Portfolio" className=" p-2 rounded-md hover:bg-secondary">Portfolio</a>
        </li>
        <li className="mr-6">
            <a href="./Contact" className=" p-2 rounded-md hover:bg-secondary">Contact</a>
        </li>
        <li className="mr-6">
            <a href="./Resume" className=" p-2 rounded-md hover:bg-secondary">Resume</a>
        </li>
    </ul>

</header>
  )
}

export default Header