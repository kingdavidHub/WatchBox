import { Search, BookmarkIcon, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-400">WatchBbox</h1>
        <div className="hidden md:flex items-center space-x-4">
          <Input
            type="search"
            placeholder="Search movies..."
            className="bg-gray-800 text-white placeholder-gray-400 border-gray-700"
          />
          <Button variant="ghost">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost">
            <BookmarkIcon className="h-5 w-5" />
            <span className="ml-2">Bookmarks</span>
          </Button>
        </div>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
}
