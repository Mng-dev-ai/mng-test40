import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

interface HeaderProps {
  navItems: { label: string; href: string }[];
}

const Header: React.FC<HeaderProps> = ({ navItems }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="mr-4 font-bold">
          Your Brand
        </Link>
        <nav className="flex flex-1 items-center justify-center space-x-4 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;