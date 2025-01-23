import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Home, Music, Radio, Users, MessageSquare, ShoppingBag } from "lucide-react";

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-white">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-white/70">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function MainNav({ userType }: { userType: "fan" | "athlete" | "admin" }) {
  return (
    <NavigationMenu className="max-w-full w-full justify-start">
      <NavigationMenuList className="space-x-2">
        {userType === "fan" && (
          <>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white bg-white/10 hover:bg-white/20">
                <Home className="w-4 h-4 mr-2" />
                Discover
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black/90 backdrop-blur-lg">
                  <ListItem href="/fan/feed" title="Feed">
                    Browse the latest music from athletes
                  </ListItem>
                  <ListItem href="/fan/chat" title="Chat Rooms">
                    Join live discussions with athletes
                  </ListItem>
                  <ListItem href="/fan/bandlab" title="BandLab">
                    Create and collaborate on music
                  </ListItem>
                  <ListItem href="/fan/beats" title="Beat Marketplace">
                    Browse and purchase beats
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/fan/feed" className="flex items-center px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors">
                <Music className="w-4 h-4 mr-2" />
                Music
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/fan/chat" className="flex items-center px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors">
                <MessageSquare className="w-4 h-4 mr-2" />
                Chat
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/fan/beats" className="flex items-center px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Beats
              </Link>
            </NavigationMenuItem>
          </>
        )}
        
        {userType === "athlete" && (
          <>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white bg-white/10 hover:bg-white/20">
                Dashboard
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black/90 backdrop-blur-lg">
                  <ListItem href="/athlete/dashboard" title="Analytics">
                    View your streaming analytics
                  </ListItem>
                  <ListItem href="/athlete/studio" title="Studio">
                    Create and edit your music
                  </ListItem>
                  <ListItem href="/athlete/chat" title="Fan Engagement">
                    Chat with your fans
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/athlete/dashboard" className="flex items-center px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/athlete/studio" className="flex items-center px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors">
                <Radio className="w-4 h-4 mr-2" />
                Studio
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/athlete/chat" className="flex items-center px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors">
                <Users className="w-4 h-4 mr-2" />
                Community
              </Link>
            </NavigationMenuItem>
          </>
        )}

        {userType === "admin" && (
          <>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white bg-white/10 hover:bg-white/20">
                Admin
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black/90 backdrop-blur-lg">
                  <ListItem href="/admin" title="Dashboard">
                    Manage verifications and users
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/admin" className="flex items-center px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
            </NavigationMenuItem>
          </>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}