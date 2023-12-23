import { FC, useState, createContext } from 'react';
type User = {
  avatar: string;
  name: string;
};

type Newsletter = {
  title: string;
};

type SidebarContext = {
  sidebarToggle: any;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  user: User;
  newsletter: Newsletter;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SidebarContext = createContext<SidebarContext>(
  {} as SidebarContext
);

export const SidebarProvider: FC = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };
  const closeSidebar = () => {
    setSidebarToggle(false);
  };
  const user = {
    avatar: '',
    name: '',
  };

  const newsletter = {
    title: 'Newsletter1'
  }
  return (
    <SidebarContext.Provider
      value={{ sidebarToggle, toggleSidebar, closeSidebar, user, newsletter }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
