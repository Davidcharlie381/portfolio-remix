import { Link, useLocation } from "@remix-run/react";

export default function NavLink({ href, className, name }: { href: string, className: string, name: string }) {
    const location = useLocation();

    const active = location.pathname === href;

    return (
        <Link
            to={href}
            className={`${className} text-zinc-700 ${active && "font-semibold"}`}
        >
            {name}
        </Link>
    );
}
