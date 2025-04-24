import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className="hidden lg:block">
        <div className="container">
            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
                <Link className="navbar__link relative" href="#">
                    FESTIVE SALE
                </Link>
                <Link className="navbar__link relative" href="#">
                    HOME
                </Link>
                <Link className="navbar__link relative" href="#">
                    NEW ARRIVALS
                </Link>
                <Link className="navbar__link relative" href="#">
                    WOMEN
                </Link>
                <Link className="navbar__link relative" href="#">
                    MEN
                </Link>
                <Link className="navbar__link relative" href="#">
                    SALT
                </Link>
                <Link className="navbar__link relative" href="#">
                    KIDS
                </Link>
                <Link className="navbar__link relative" href="#">
                    SHOES
                </Link>
                <Link className="navbar__link relative" href="#">
                    BAGS
                </Link>
                <Link className="navbar__link relative" href="#">
                    FRAGRANCES
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar;