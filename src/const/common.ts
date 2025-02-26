const routes = [
  {
    id: 1,
    label: "About",
    href: "/",
    children: [
      { id: 2, label: "About us", href: "/about-us" },
      { id: 3, label: "The Team", href: "/teams" },
    ],
  },
  {
    id: 4,
    label: "Research",
    href: "/research",
  },
  {
    id: 5,
    label: "Product experiences",
    href: "/experience",
  },
  {
    id: 6,
    label: "Blog",
    href: "/blog",
  },
];

export { routes };
