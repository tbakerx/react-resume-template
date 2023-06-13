import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/G120-Angle.png';
import porfolioImage2 from '../images/portfolio/pngwing.com.png';
import porfolioImage3 from '../images/portfolio/IMG_20190730_174301.jpg';
import porfolioImage4 from '../images/portfolio/P_20141224_104128.jpg';
import porfolioImage5 from '../images/portfolio/refreshable-Braille-display.png';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/IMG_17002.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Resume of Bibin Alias',
  description: "Interactive resume deployed in cloud (github.io)",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Bibin Alias.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      An <strong className="text-stone-100">engineering professional</strong> with strong expertise in creating
and accomplishing solutions for complicated business problems requiring smart logic. Hands-on experience in
designing and developing complex algorithms using <strong className="text-stone-100">Embedded C</strong>.
Experienced in MVC development and automated testing using <strong className="text-stone-100">python</strong>. 
Strong organizational skills along with the ability to accomplish multiple tasks under extreme pressure, and 
meet specific deadlines.
      </p>
    </>
      ),
  actions: [
    {
      //href: 'https://drive.google.com/file/d/1WCUL-6yPTkavEckD3zrple1Fw7o4rVti/view?usp=share_link',
      //href: 'https://drive.google.com/u/0/uc?id=1WCUL-6yPTkavEckD3zrple1Fw7o4rVti&export=download',
      href: 'https://drive.google.com/u/0/uc?id=1hJx97IL3oKnUkbyWNy6KdbKkCDmezkXj&export=download',
      //text: 'Curriculum Vitae',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: /*`Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`*/
  `Highly skilled professional with over 6 years of experience (3 years - vocational) of being an embedded software engineer.
  Proven expertise in delivering high-quality solutions and identifying critical issues. Adept at designing and
  implementing efficient test frameworks to streamline processes. Proficient in collaborating with
  cross-functional teams and providing technical guidance. Strong problem-solving abilities and a keen eye
  for detail. Seeking high-end tech roles to leverage skills and contribute to cutting-edge projects.`,
  aboutItems: [
    //{label: 'Location', text: 'Kochi, Kerala', Icon: MapIcon},
    {label: 'Location', text: 'Scarborough, ON', Icon: MapIcon},
    {label: 'Age', text: '31', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Meliponiculture, Driving', Icon: SparklesIcon},
    {label: 'Study', text: 'Mahatma Gandhi University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Thinkpalm Technologies', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
 
  {
    name: 'Domains',
    skills: [
      {
        name: 'IoT',
        level: 9,
      },
      {
        name: 'Bare-metal',
        level: 9,
      },
      {
        name: 'Embedded Linux',
        level: 8,
      },
      {
        name: 'RTOS',
        level: 7,
      },
    ],
  },
  {
    name: 'Programing Languages',
    skills: [
      {
        name: 'C',
        level: 9,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'Assembly Language',
        level: 4,
      },
      {
        name: 'HDL',
        level: 2,
      },
    ],
  },
  {
    name: 'Wired Communication Protocols',
    skills: [
      {
        name: 'SPI',
        level: 9,
      },
      {
        name: 'I2C',
        level: 9,
      },
      {
        name: 'RS-232',
        level: 8,
      },
      {
        name: 'RS-485',
        level: 8,
      },
      {
        name: 'Quad SPI',
        level: 8,
      },
      {
        name: 'CAN',
        level: 8,
      },
    ],
  },
 
  {
    name: 'Wireless Communication protocols',
    skills: [
      {
        name: 'MQTT',
        level: 9,
      },

      {
        name: 'ZigBee',
        level: 7,
      },

      {
        name: 'Z-Wave',
        level: 6,
      },
      {
        name: 'Wi-Fi',
        level: 5,
      },

      {
        name: 'Bluetooth',
        level: 3,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Malayalam',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 4,
      },
      {
        name: 'Sanskrit',
        level: 2,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Driver Behavior Monitoring System',
    description: 'Designed and developed self-learning algorithms for harsh acceleration/braking and tilt/rash turn using IMU. and convert it to a ready to use portable device',
    url: 'https://github.com/bibinalias/Driver-Behaviour-Sensing.git',
    image: porfolioImage1,
  },
  {
    title: 'Brushless DC Motor Driver',
    description: "Incorporated a feedback system in the driver, ensuring operational stability and maximising the efficiency of the 'patented' Brushless DC Motor.",
    url: '',
    image: porfolioImage2,
  },
  {
    title: 'Smart Welding Glass',
    description: "Designed eyeglass with Auto-Shutter Technology to safeguard the eyes from arc eye while also measuring the welder's efficiency, working time, welding time, and the number of welds completed per day.",
    url: '',
    image: porfolioImage3,
  },
  {
    title: 'Touchscreen Web KIOSK',
    description: "An Android touchscreen web kiosk was introduced for the students at Govt. Polytechnic College in Kothamangalam. This kiosk enabled them to access the respective website, www.tekerala.org, allowing them to easily find their profiles and obtain information about their academic status.",
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Refreshable Braille Display',
    description: 'Introduced a solution to enable blind individuals to access Portable Document Format (PDF) files by using braille characters for reading.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'November 2019',
    location: 'Mar Athanasius College of Engineering - Mahatma Gandhi University, Kerala',
    title: 'Bachelor of Technology Degree in Electronics & Communication Engineering',
    content: <p>As co-founder of the IOT Club, developed projects using 
      Arduino and Raspberry Pi and coordinated the Industrial Entrepreneurship Development Cell, gaining leadership skills
      through various trainings.
</p>,
  },
  {
    date: 'April 2015',
    location: 'Board of Technical Education, Kerala',
    title: 'Diploma in Electronics Engineering',
    content: <p>graduated with First Class Honors with Distinction, specializing in Electronics.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'November 2022 - Present',
    location: 'Thinkpalm Technologies',
    title: 'Software Engineer',
    content: (
      <ul /*style={{ listStyleType: "no-bullet" }}*/>
        <b>Responsibilities:</b>
        <li> Develop and maintain Bluetooth and Wi-Fi device drivers, ensuring compatibility with various operating systems and hardware configurations.
</li><li> Identify and resolve bugs in the firmware of the Wi-Fi device through Coverity bug fixing.
</li><li> Add new features and functionality to the Wi-Fi and Bluetooth device drivers, based on project requirements.
</li><li> Collaborate with cross-functional teams to ensure seamless integration of the drivers into the overall system architecture.
</li><li> Conduct code reviews and perform debugging to optimize the performance and reliability of the drivers.
</li><li> Utilize tools like Wireshark for network analysis and debugging purposes.
</li><li> Follow software development best practices and coding standards to ensure high-quality and maintainable code.
</li><li> Use version control systems, such as git, to manage code repositories and track changes.
</li><li> Adhere to project schedules and deadlines, effectively managing priorities and multitasking.
</li><li> Participate in team meetings and provide regular progress updates on assigned tasks.
</li><li> Stay updated with the latest industry trends and technologies in Bluetooth and Wi-Fi device driver development.
</li>
        <b>Key Highlights:</b>  
       <li> Developed Bluetooth and Wi-Fi device drivers, ensuring compatibility and optimal performance across various systems and hardware configurations.
       </li><li>Resolved firmware bugs in Wi-Fi devices using Coverity, enhancing stability and reliability.
       </li><li>Added new features to meet project requirements, improving functionality and user experience.
       </li><li>Collaborated with cross-functional teams for seamless integration of drivers into system architecture.
       </li><li>Conducted code reviews, debugging, and optimization to enhance driver performance.
       </li></ul>
    ),
  },
  {
    date: 'April 2021 - November 2022',
    location: 'GadgEon Smart Systems Inc.',
    title: 'Software Engineer',
    content: (
     <ul>
      <b>Responsibilities:</b>
      <li> Developed, tested, and maintained software applications.
</li><li> Collaborated with cross-functional teams to gather requirements and design software solutions.
</li><li> Wrote efficient and clean code according to coding standards and best practices.
</li><li> Debugged and resolved software defects and issues.
</li><li> Conducted software testing and quality assurance activities.
</li><li> Partook in code reviews to ensure code quality and maintainability.
</li><li> Documented software designs, processes, and procedures.
</li><li> Provided technical support and troubleshot assistance to end-users.
</li>
      <b>Key Highlights:</b>  
    <li> Designed and developed Model View Controller (MVC) using Python for Test Fixture Application.
</li><li> Created user interface designs (PyQt5) for Test Fixture Application.
</li><li> Implemented test automation using Python.
</li><li> Developed Embedded Linux Applications for MQTT with TLS, ZigBee, and Z-Wave.
</li><li> Possess basic knowledge of mDNS and Bluez.
</li><li> Designed and developed a device driver for ADS8668 (SPI).
</li><li> Experienced in Linux platform and Embedded Linux (Yocto).
</li><li> Conducted final board bring-up and testing using equipment like a logical analyzer.
</li>
</ul>
      
    ),
  },
  {
    date: 'November 2019 - April 2021',
    location: 'Transight Systems',
    title: 'Firmware Engineer',
    content: (
      


      <ul>
        <b>Responsibilities:</b>
<li> Developed and debugged firmware code for embedded systems.
</li><li> Collaborated with hardware engineers to ensure seamless integration of firmware with hardware components.
</li><li> Conducted testing and verification of firmware to ensure functionality, reliability, and performance.
</li><li> Troubleshot and resolved issues related to firmware functionality and compatibility.
</li><li> Maintained documentation and version control of firmware code.
</li><li> Collaborated with cross-functional teams to define requirements and specifications for firmware development.
</li><li> Provided technical support to internal teams and customers regarding firmware-related inquiries.
</li>
        <b>Key Highlights:</b>         
          <li> Attained experience in FreeRTOS 10 and Open CPU, specializing in firmware development.
</li><li> Designed and developed drivers for W25Q128JV (QSPI) and LIS2DE12 (I2C).
</li><li> Completed numerous successful projects in the Internet of Things (IoT) field using ARM microcontrollers.
</li><li> Proficient in communication protocols such as CAN, I2C, QUAD SPI, RS 485, and RS 232.
</li><li> Developed self-learning algorithms for harsh acceleration/braking and tilt/rash turn using LSM6DS3 and LSM6DSL IMU for AIS 140 devices.
</li><li> Conducted hardware and firmware testing of various IoT devices, leveraging Python programs for Automotive Research Association of India (ARAI) certification.
</li><li> Knowledgeable about 4G, 2G modules (EC25, MC60) and GNSS modules (L89, L86).
</li><li> Skilled in reverse engineering and proficient in equipment like an oscilloscope for final board bring-up and testing.
</li><li> Proficient in Orcad 9.2 for the schematic design and PCB testing.
</li>
      </ul>
     

    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Jesse Wilson',
      text: 'Bibin is a highly skilled engineer with expertise in embedded systems development, firmware development, and software design. Bibin has demonstrated strong problem-solving skills, attention to detail, and a deep understanding of embedded systems. He is a quick learner and is always eager to take on new challenges. His ability to work well in a team and communicate complex technical concepts to non-technical stakeholders makes him an excellent asset.',
      image: "https://www.linkpicture.com/q/jesse_1.jpeg",
    },
    {
      name: 'Vijeesh PM',
      text: 'I highly recommend Bibin as an embedded software engineer. During his time at Transight Systems, He demonstrated exceptional technical skills, dedication, and attention to detail in his work.',
      image: 'https://www.linkpicture.com/q/vijeesh.jpeg',
    },
    {
      name: 'Arun Cheriyan',
      text: 'Bibin is a fast learner, capable of comprehending intricate technical concepts in a fraction of the time it would take most people. He possesses a sharp eye for detail and an insatiable curiosity that motivates him to continuously seek out new challenges and acquire new skills. His ability to learn quickly made him an invaluable member of our team, allowing him to take on complex projects and deliver exceptional results in a short amount of time.',
      image: 'https://www.linkpicture.com/q/arun.jpeg',
    },
    {
      name: 'Nithin Abhimanue',
      text: 'Bibin has a deep understanding of embedded systems, including hardware and software integration. He is adept at working with microcontrollers, sensors, and other embedded devices. He is also proficient in programming languages such as C, Python, and assembly language.',
      image: 'https://www.linkpicture.com/q/nithin.jpeg',
    },
    {
      name: 'Justin Joy',
      text: 'Bibin is a talented firmware engineer with dedication to his designs. He has a good understanding of communication protocols. He is experienced with different controller families. I should recommend him for Programming skills, interpersonal skills and problem solving skills as these are essential for a developer.',
      image: 'https://www.linkpicture.com/q/justin.jpeg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "I believe that collaboration is key to success. Let's explore how we can work together to achieve great things.",
  items: [
    {
      type: ContactType.Email,
      text: 'bibinalias1@gmail.com',
      href: 'mailto:bibinalias1@gmail.com',
    },
    {
      type: ContactType.Location,
      //text: 'Kochi Kerala, India',
      text: 'Scarborough ON, Canada',
      //href: 'https://goo.gl/maps/X9pzUczgqcBDZxuw7',
      href: 'https://goo.gl/maps/LPKjpPHVu3ErHyrc9',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Bibin Alias',
      href: 'https://www.linkedin.com/in/bibinalias/',
    },
    {
      type: ContactType.Github,
      text: 'bibinalias',
      href: 'https://github.com/bibinalias',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/bibinalias'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/21387178/bibin-alias'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/bibinalias/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/bibin__alias/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/bibin__alias'},
];
