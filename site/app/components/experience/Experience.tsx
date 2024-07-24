import ExperienceCard from "./ExperienceCard";
import NewCard from "./NewCard";



export default function Experience(){
    const leadTags = ["Python", "JavaScript", "TypeScript", "Django", "React"];
    const leadLink = "https://www.sparesinmotion.com";
    const freelanceTags = ["JavaScript", "Python", "Nextjs", "AWS"];
    const bankTags = ["Team leadership", "Customer service", "Business relationship building"]
    const leadSubtitle = "Spares in Motion inc.";
    const techLeadDescription = "Responsible for leading all U.S. based digital product development for an international team of developers and mathematicians. These projects range from mobile apps to custom content management systems all built using a wide variety of technologies. This role blends hands-on technical work, team leadership and strategic planning.";
    const freelanceSubtitle = "Freelancer";
    const freelancerDescription = "Developed and maintained scalable, high-performance mobile and web applications for various personal and small business clients. These projects ranged from simple static pages to inventory management systems. Freelance work still available per request, contact me for more details."
    const bankDescription = "I know this isn't a development related position but I am proud of the several years I spent in the banking industry. I worked with clients to build longstanding banking relationships built on trust and communication and deliver banking products and services to best support their goals.";
    const bankLink="https://www.usbank.com/index.html";
    return(
    <div className="space-y-8 pb-20" id="experience">
        <h2>Experience</h2>  
        <NewCard range="2023-Present" job_title="Technical lead" job_subtitle={leadSubtitle} description={techLeadDescription} tags={leadTags} link={leadLink}/>
        <NewCard range="2019-2023" job_title="Full stack developer" job_subtitle={freelanceSubtitle} description={freelancerDescription} tags={freelanceTags}/>
        <NewCard range="2017-2023" job_title="Client relationship consultant" job_subtitle="U.S. Bank" description={bankDescription} tags={bankTags} link={bankLink}/>
    </div>
    )
}