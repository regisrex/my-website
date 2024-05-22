<script>
  import Link from "../Link.svelte";
  import Padded from "../layouts/Padded.svelte";
  import AboutSection from "./AboutSection.svelte";
</script>

<Padded>
  <div class="flex items-start">
    <div class="p-4 w-1/3 msm:hidden md:block"></div>
    <div class="p-4 w-2/3">
      <p class="text-black dark:text-bluish-100 text-3xl font-black">
        R&eacute;gis N.
      </p>
    </div>
  </div>
  <AboutSection key="Bio">
    <div>
      Mid-level software engineer, currently revamping some stuffs at <Link
        href="https://scriptylabs.com">Scriptylabs</Link
      >, Attending 12<sup>th</sup>grade at <Link href="https://rca.ac.rw"
        >Rwanda Coding academy</Link
      >, Mentoring Rwandese to join the tech community at <Link
        href="https://rca.ac.rw">WithinTech</Link
      >, Pushing some commits to open source projects on <Link
        href="https://github.com/regisrex">Github</Link
      >, Doing some freelance ux-ui design work and posting them on my(<Link
        href="https://designs.regisndizihiwe.me">portifolio</Link
      > ) and playing with my nephew :)
    </div>
  </AboutSection>

  <AboutSection key="Greeting">
    What's up! I'm a {new Date().getFullYear() - 2006 - 1}yo software engineer
    living in Ruhengeri, Rwanda. I enjoy building challenging things,
    otherwise.. I act lazy. I publicize educational repos on my github, maybe
    you can <Link href="https://github.com/regisrex?tab=repositories">
      check
    </Link>. I also write my thoughts most about dev and tech on my <Link
      href="/blog"
    >
      blog
    </Link>
  </AboutSection>

  <AboutSection key="Experience" className="flex flex-col gap-2">
    <p>
      Throught my 3 years of experience, I've worked with a variety of
      technologies and tools. I'm currently focused on building web applications
      with Typescript and Golang.
    </p>
    <p>Web projects:</p>
    <ul class="pl-6">
      <li class="list-disc">
        <Link href="https://invictus.rmf.gov.rw">Invictus RMF</Link>
        : the management system used at rmf.gov.rw
      </li>
      <li class="list-disc">
        <Link href="https://comidusas.com">Comidu</Link>
        :site, api & admin for comidu's website
      </li>
      <li class="list-disc">
        <Link href="https://rwandaircatering.rw">RwandAir Catering</Link>
        : site + cart system, api & admin for RwandAir Catering service
      </li>
      <li class="list-disc">
        <Link href="https://kurious.rw">Kurious learn</Link>
        : East africa's top e-learning platform
      </li>
      <li class="list-disc">
        <Link href="https://hello.regisrex.tech/">Pandora</Link>
        : algorithmless social media platform
      </li>
    </ul>
    <p>Tools and packages:</p>
    <ul class="pl-6">
      <li class="list-disc">
        <Link href="https://github.com/regisrex/json-base">json-base</Link>
        : a minitool that enables using json files as databases
      </li>
      <li class="list-disc">
        <Link href="https://github.com/veritem/gcommit">gcommit</Link>
        : conventional commits utility cli
      </li>
      <li class="list-disc">
        <Link href="https://github.com/regisrex/string-hunt">string-hunt</Link>
        : recursively string-search via nested objects
      </li>
      <li class="list-disc">
        <Link href="https://github.com/regisrex/sharecode">string-hunt</Link>
        : a tiny working clone of codeshare.io
      </li>
    </ul>
    <p>UX-UI Design:</p>
    <p>
      I made a seperate portofolio for that, check it <Link
        href="https://designs.regisndizihiwe.me">here</Link
      >
    </p>
  </AboutSection>

  <AboutSection key="Contact">
    <p>
      Thinking of a project or somewhat, reach out to me at
      <Link href="mailto:hey@regisndizihiwe.me">hey@regisndizihiwe.me</Link>.
      You can also follow me on Github and Twitter to see what I'm up to! See
      you!
    </p>
  </AboutSection>
  <AboutSection key="Fun fact" className="flex flex-col gap-2">
    <p>I've never heard of a fun fact which is actually funny :)</p>
  </AboutSection>
  <AboutSection key="Socials" className="flex items-center gap-2">
    <Link href="https://github.com/regisrex">Github</Link>
    <Link href="https://linkedin.com/regisndizihiwe">LinkedIn</Link>
    <Link href="https://x.com/regissrex">Twitter</Link>
  </AboutSection>
</Padded>
