const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between bg-primary p-2 text-white w-full">
      <ul className="flex space-x-4">
        <li>
          <a href="https://github.com/DebugBob" target="_blank"><img src="src/images/github-mark.png" className="w-8 h-8" alt="GitHub" /></a>
        </li>
        <li>
          <img src="src/images/LI-In-Bug.png" className="w-8 h-8" alt="LinkedIn" />
        </li>
        <li>
          <img src="src/images/twitter.png" className="w-8 h-8" alt="Twitter" />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
