import {Link} from "react-router";
import {links} from "~/constant/links";
import type {Links} from "~/@types/link";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="border-t border-slate-200/70 bg-white/60 backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/60">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-slate-600 dark:text-slate-400">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p>Powered by React Router v7 &copy; {year} Pvt. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            {
              links.map((link: Links) => (<Link key={link.link} to={link.link}
                                                className="hover:text-indigo-600 hover:underline">{link.label}</Link>))
            }

          </nav>
        </div>
      </div>
    </footer>
  )
}
