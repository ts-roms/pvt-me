import {useEffect, useState} from "react";
import {cn} from "~/utils/cn";
import {Link} from "react-router";
import {links} from "~/constant/links";
import type {Links} from "~/@types/link";

export const Navbar = () => {

  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || window.pageYOffset;
      setScrolled(y > 8);
      const goingDown = y > lastY;
      // Hide when scrolling down beyond a small threshold, show when up or near top
      if (y > 80 && goingDown && y - lastY > 2) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastY(y);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 duration-300 border-b backdrop-blur transition-colors",
        hidden ? "-translate-y-full" : "translate-y-0",
        scrolled
          ? "border-slate-200/70 bg-white/70 dark:border-slate-800/70 dark:bg-slate-900/60"
          : "border-transparent bg-transparent"
      )}
    >
      <div className={cn("w-full px-6 text-white")}>
        <nav className="flex h-14 items-center justify-between text-sm">
          <Link to="/" className="font-semibold tracking-tight hover:opacity-80">
            Pvt Hub
          </Link>
          <div className="flex items-center gap-4">
            {
              links.map((link: Links) => <Link key={link.link} to={link.link}
                                               className="hover:text-indigo-600 hover:underline">{link.label}</Link>)
            }
          </div>
        </nav>
      </div>
    </header>
  );
}
