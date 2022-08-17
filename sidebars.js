/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  rulesSidebar: [
    "rules/intro",
    {
      type: "category",
      label: "Core System",
      link: {
        type: "generated-index",
        title: "Core System",
        description: "Learn about the most important Docusaurus concepts!",
        slug: "rules/core-system",
      },
      items: ["rules/core-system/actions", "rules/core-system/rolling-dice"],
    },
  ],
  settingSidebar: [
    "setting/intro",
    {
      type: "category",
      label: "Avalon",
      link: {
        type: "generated-index",
        title: "Avalon",
        description: "Learn about the most important Docusaurus concepts!",
        slug: "settings/avalon",
      },
      items: ["setting/avalon/welcome-to-avalon"],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
