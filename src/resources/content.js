import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Mariam",
  lastName: "Karapetyan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "SoftWare Engineer",
  avatar: "/images/avatar.jpeg",
  email: "mariamkarapetyan1401@gmail.com",
  location: "Armenia", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Russian"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/mariam1401",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mariam-karapetyan-47ba13214/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/avatar.jpeg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Implementing design systems with scalable frontend architecture</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Mariam, a frontend developer specializing in building performant, accessible interfaces that bring design systems to life.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m a frontend developer with 4 years of hands-on experience building responsive, user-friendly web applications. My main focus is delivering pixel-perfect UI with clean, maintainable code using modern technologies like React.js, Next.js, JavaScript, TypeScript, HTML, and CSS.<br/>
        <br/>Over the years, I’ve contributed to a variety of projects — from B2B platforms to dynamic content-rich websites — collaborating closely with designers, backend developers, and product teams. I enjoy turning complex problems into simple, elegant interfaces, and I care deeply about performance, accessibility, and user experience.<br/>
        <br/>I’m constantly learning and adapting to new tools and frameworks, and I take pride in writing scalable code that fits well in team-based environments. Whether it’s optimizing performance, integrating APIs, or improving design systems, I love building frontends that not only look good but also work seamlessly.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SoftShark LLC",
        timeframe: "2021 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Develop and maintain scalable user interfaces using React.js and Next.js, ensuring responsiveness and performance across devices and browsers.
          </>,
          <>
            Collaborate with backend developers and designers to integrate APIs, implement design systems, and deliver clean, accessible, and production-ready frontend code.
          </>,
        ],
        images: [],
      },
      {
        company: "Booka LLC",
        timeframe: "2022 - 2023",
        role: "Software Engineer",
        achievements: [
          <>
            Implement dynamic features and reusable components to enhance user experience and reduce development time across the project.
          </>,
          <>
            Optimize frontend performance by identifying bottlenecks, lazy-loading assets, and improving Core Web Vitals for better SEO and load speed.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Armenian State University of Economics",
        description: <>Business Management faculty (2018-2022)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "React.js",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Next.js",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },
      {
        title: "Javascript",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },
      {
        title: "Typescript",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },
      {
        title: "Redux Toolkit/Redux Saga",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },
      {
        title: "HTML",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },
      {
        title: "CSS/SCSS/Tailwind CSS",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },
      {
        title: "Material Ui/Ant Design",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },

    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/areg1.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/areg2.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
