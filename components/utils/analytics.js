import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-ST8NVP3CPM");
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
