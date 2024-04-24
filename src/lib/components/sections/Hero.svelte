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
            Software engineer at
            <Link href="https://scriptylabs.com">scriptylabs</Link>, Attending
            12<sup>th</sup>grade at <Link href="https://rca.ac.rw"
                >Rwanda Coding academy</Link
            >, Mentor/Trainer at <Link href="https://rca.ac.rw">WithinTech</Link
            >, Opensource enthusiast on github.
        </div>
    </AboutSection>

    <AboutSection key="Greeting">
        I'm a software engineer based in Kigali, Rwanda. I love building things
        that make an impact on people's lives.
    </AboutSection>

    <AboutSection key="More" className="flex flex-col gap-2">
        <p>
            Throught my 3 years of experience, I've worked with a variety of
            technologies and tools. I'm currently focused on building web
            applications with Typescript and Golang.
        </p>
    </AboutSection>

    <AboutSection key="Contact">
        <p>
            Thinking of a project or somewhat, reach out to me at
            <Link href="mailto:hey@regisndizihiwe.me"
                >hey@regisndizihiwe.me</Link
            >. You can also follow me on Github and Twitter to see what I'm up
            to! See you!
        </p>
    </AboutSection>
    <AboutSection key="Fun fact" className="flex flex-col gap-2">
        <p>I've never heard of a fun fact which is actually funny :)</p>
    </AboutSection>
    <AboutSection key="Socials" className="flex items-center gap-2">
        <Link href="https://github.com/regisrex">Github</Link>
        <Link href="https://linkedin.com/regisndizihiwe">LinkedIn</Link>
        <Link href="https://x.com/regissrex">X</Link>
    </AboutSection>
</Padded>
