import image from "./assets/polishko.jpg";
import { ImageBlock, TitleBlock, TextBlock } from "./classes/blocks";

const tech = `<ul>
<li>HTML5</li>
<li>CSS3</li>
<li>GIT</li>
<li>WebPack</li>
<li>Redux</li>
<li>npm</li>
<li>JavaScript</li>
<li>React.js</li>
</ul>`;

const soft = `<ul>
<li>Result-oriented</li>
<li>Sociable</li>
<li>Reliable</li>
<li>Patient</li>
<li>Fast learner</li>
<li>Good team player</li>
<li>Optimistic & open to people.</li>
</ul>`;

const languages = `<ul>
<li>Ukranian</li>
<li>English</li>
<li>Russian</li>
</ul>`;

const contact = `<ul>
<li>Phone number: +380992903619</li>
<li>Email: kost927@gmail.com</li>
<li>Kiev</li>
<li><a href="https://www.linkedin.com/in/kostyantin-polishko/">LinkedIn</a></li>

</ul>`;

export const sidebar = [
  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center"
    },
    imageStyles: {
      width: "380px",
      height: "auto",
      "border-radius": "50%"
    },
    alt: "My photo"
  }),

  new TitleBlock("KOSTIANTYN POLISHKO", {
    tag: "h1",
    styles: {
      color: "black",
      padding: "0.3rem 1.5rem",
      "text-align": "left",
      "font-weight": "black"
    }
  }),

  new TitleBlock("Front-end developer", {
    tag: "h4",
    styles: {
      color: "black",
      padding: "0 1.5rem",
      "text-align": "left",
      "font-weight": "black",
      "font-style": "italic"
    }
  }),

  new TitleBlock("TECH SKILLS", {
    tag: "h2",
    styles: {
      color: "black",
      padding: "1.5rem 1.5rem 0 1.5rem",
      "text-align": "left",
      "font-weight": "black"
    }
  }),

  new TextBlock(tech, {
    styles: {
      padding: "0 1.5rem 0 1.5rem",
      "font-weight": "500",
      "font-style": "italic"
    }
  }),

  new TitleBlock("TECH SKILLS", {
    tag: "h2",
    styles: {
      color: "black",
      padding: "1.5rem 1.5rem 0 1.5rem",
      "text-align": "left",
      "font-weight": "black"
    }
  }),

  new TextBlock(soft, {
    styles: {
      padding: "0 1.5rem 0 1.5rem",
      "font-weight": "500",
      "font-style": "italic"
    }
  }),

    new TitleBlock("LANGUAGES", {
        tag: "h2",
        styles: {
            color: "black",
            padding: "1.5rem 1.5rem 0 1.5rem",
            "text-align": "left",
            "font-weight": "black"
        }
    }),

    new TextBlock(languages, {
        styles: {
            padding: "0 1.5rem 0 1.5rem",
            "font-weight": "500",
            "font-style": "italic"
        }
    }),

    new TitleBlock("CONTACT DETAILS:", {
        tag: "h2",
        styles: {
            color: "black",
            padding: "1.5rem 1.5rem 0 1.5rem",
            "text-align": "left",
            "font-weight": "black"
        }
    }),

    new TextBlock(contact, {
        styles: {
            padding: "0 1.5rem 0 1.5rem",
            "font-weight": "500",
            "font-style": "italic"
        }
    })
];
