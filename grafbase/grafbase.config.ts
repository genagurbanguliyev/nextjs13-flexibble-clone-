<<<<<<< HEAD
import { g, auth, config } from "@grafbase/sdk";

const User = g.model("User", {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g
    .relation(() => Projects)
=======
import { g, config, auth } from "@grafbase/sdk";

// @ts-ignore
const User = g.model("User", {
  name: g.string().length({ min: 2, max: 100 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().length({ min: 2, max: 1000 }).optional(),
  githubUrl: g.url().optional(),
  linkedinUrl: g.url().optional(),
  projects: g
    .relation(() => Project)
>>>>>>> adce5e0 (graf_config)
    .list()
    .optional(),
});

<<<<<<< HEAD
const Projects = g.model("Projects", {
=======
// @ts-ignore
const Project = g.model("Project", {
>>>>>>> adce5e0 (graf_config)
  title: g.string().length({ min: 3 }),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
<<<<<<< HEAD
  hithubUrl: g.url(),
=======
  githubUrl: g.url(),
>>>>>>> adce5e0 (graf_config)
  category: g.string().search(),
  createdBy: g.relation(() => User),
});

export default config({
  schema: g,
<<<<<<< HEAD
  // Integrate Auth
  // https://grafbase.com/docs/auth
  // auth: {
  //   providers: [authProvider],
  //   rules: (rules) => {
  //     rules.private()
  //   }
  // }
=======
>>>>>>> adce5e0 (graf_config)
});
