import image from "./assets/polishko.jpg";
import { ImageBlock, TitleBlock, TextBlock } from "./classes/blocks";
import { tech, soft, languages, contact } from "./constants";

export const sidebar = [
  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center"
    },
    imageStyles: {
      width: "80%",
      height: "auto",
      "border-radius": "50%",
      border: "5px solid white"
    },
    alt: "My photo"
  }),

  new TitleBlock("KOSTIANTYN POLISHKO", {
    tag: "h1",
    styles: {
      padding: "0.3rem 1.5rem",
      "text-align": "left",
      "font-weight": "black"
    }
  }),

  new TitleBlock("Front-end developer", {
    tag: "h4",
    styles: {
      padding: "0 1.5rem",
      "text-align": "left",
      "font-weight": "black",
      "font-style": "italic"
    }
  }),

  new TitleBlock("TECH SKILLS", {
    tag: "h2",
    styles: {
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

  new TitleBlock("SOFT SKILLS", {
    tag: "h2",
    styles: {
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
