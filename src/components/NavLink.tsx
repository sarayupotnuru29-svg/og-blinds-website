// import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
// import { forwardRef } from "react";
// import { cn } from "@/lib/utils";

// interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
//   className?: string;
//   activeClassName?: string;
//   pendingClassName?: string;
// }

// const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
//   ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
//     return (
//       <RouterNavLink
//         ref={ref}
//         to={to}
//         className={({ isActive, isPending }) =>
//           cn(className, isActive && activeClassName, isPending && pendingClassName)
//         }
//         {...props}
//       />
//     );
//   },
// );

// NavLink.displayName = "NavLink";

// export { NavLink };



import { NavLink } from "./NavLink"; // Your custom NavLink component

const Navbar = () => {
  return (
    <nav className="flex items-center gap-8 font-bold text-white uppercase">
      <NavLink to="/" activeClassName="text-[#84A59D]">
        Home
      </NavLink>
      
      <NavLink to="/services" activeClassName="text-[#84A59D]">
        Services
      </NavLink>

      {/* SHUFFLED: Contact is now before About */}
      <NavLink to="/contact" activeClassName="text-[#84A59D]">
        Contact
      </NavLink>

      <NavLink to="/about" activeClassName="text-[#84A59D]">
        About
      </NavLink>
    </nav>
  );
};