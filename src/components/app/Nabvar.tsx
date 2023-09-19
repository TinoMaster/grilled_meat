import { NavbarLink } from "./NabvarLink";

const links = [
  {
    name: "Home",
    href: "/",
    hash: "",
  },
  {
    name: "Menu",
    href: "/menu",
    hash: "menu",
  },
  {
    name: "Photos",
    href: "/photos",
    hash: "photos",
  },
  {
    name: "Contacts",
    href: "/contacts",
    hash: "contacts",
  },
];

export const Nabvar = () => {
  return (
    <div className="flex justify-center items-center absolute text-white z-10 w-full h-32">
      <div className="flex w-11/12 max-w-720p justify-between items-center">
        {/* Logo */}
        <div className="text-2xl">Noah</div>
        {/* Links */}
        <div className="flex gap-3 text-lg">
          {links.map((link) => (
            <NavbarLink key={link.name} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
};
