import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Portfolio de Nicolas
        </Link>
      </div>
      <a href="" className="cta-btn">Mon CV</a>
    </div>
  )
}

export default Navbar;