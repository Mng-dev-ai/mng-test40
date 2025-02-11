import { Link } from 'react-router-dom';

interface FooterProps {
  links: { label: string; href: string }[];
}

const Footer: React.FC<FooterProps> = ({ links }) => {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-muted-foreground hover:text-foreground text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;