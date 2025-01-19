import { proxy, subscribe } from "valtio";

type ProxyGlobalSidebar = {
  isOpen: boolean;
};

export const proxyGlobalSidebar = proxy<ProxyGlobalSidebar>(
  JSON.parse(localStorage.getItem("sidebar") as string) || {
    isOpen: false,
  },
);

export const openSidebar = () => {
  proxyGlobalSidebar.isOpen = true;
};

export const closeSidebar = () => {
  proxyGlobalSidebar.isOpen = false;
};

subscribe(proxyGlobalSidebar, () => {
  localStorage.setItem("sidebar", JSON.stringify(proxyGlobalSidebar));
});
