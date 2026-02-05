import { ArrowUpRight, Github } from "lucide-react";
import {AnimatedBorderButton} from "@/components/AnimatedBorderButton";
import { useContext } from "react";
import { ThemeContext } from "@/Context"; 
import { useTranslation } from 'react-i18next';

export const Projects = ()=>{
    const { t } = useTranslation();
    const theme = useContext(ThemeContext);
    const isLight = !theme.state.lightMode;

    
const projects=[
    {
    title :"Kotkantien Malaus",
    description: "pro.desc_1",
    
    image:"/projects/maalaus.webp",
    tags:["SVG", "Html", "CSS"],
    link:"https://geronimo.okol.org/~arsyad/index.html",
    github:"https://github.com/yadicim/Maalaus",




    },

    {
        title: "KATAPULTTI",
        description: "pro.desc_2",
        image: "/projects/katapultti.webp",
        tags: ["C#", "Unity", "Game", "Interactive"],
        link: "https://yadicim.itch.io/katapultti",
        github: "https://github.com/yadicim/MyUnityGame"
    } ,

    {
        title: "Maailman Tapahtuma",
        description: "pro.desc_3",
            
        image: "/projects/tapahtuma.webp",
        tags: ["HTML", "PHP", "Responsive Design"],
        link: "https://geronimo.okol.org/~arsyad/Palvelinohjelmointi%20N%C3%A4ytt%C3%B6ty%C3%B6/index.php",
        github: "https://github.com/yadicim/Tapahtuma.git"
    }

    




];
    return (
     <section id="projects" className="py-32 relative overflow-hidden" >
        {/*Bg glows*/ }
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-rimary/5 rounded-full blur-3xl" ></div>
        <div className=" absolute bottom-1/4 left-0 w-64 h-64 bg-(--color-highlight)/5 rounded-full blur-3xl"></div>

        <div className=" container mx-auto px-6 relative z-10">
            {/*SECTION HEADER*/}
            <div className=" text-center mx-auto max-w-3xl mb-16">
                <span className=" text-(--color-secondary-foreground) text-sm font-medium tracking-wider uppercase animate-fade-in ">{t('pro.header_1')}</span>
                <h2 className=" text-(--color-opposite) text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
                    {t('pro.header_2')}
                    <span className="font-serif italic font-normal text-white"> {t('pro.header_3')}
                    </span>
                </h2>
                <p className="text-(--color-muted-foreground) animate-fade-in animation-delay-200">
                    {t('pro.header_p')}

                </p>

            </div>
            {/*PROJECTS*/}
            <div className=" grid md:grid-cols-2 gap-8">
                {projects.map((project, idx)=> {
                    const isLastAndOdd = idx === projects.length - 1 && projects.length % 2 !== 0;
                    return (
                    <div key={idx} 
                    className={`group glass rounded-2xl overflow-hidden animate-fade-in 
                    ${isLastAndOdd ? "md:col-span-2 md:w-1/2 md:mx-auto" : "md:col-span-1"}
                `}
                    
                    style={{ animationDelay: `${(idx +1)* 100}ms`}}
                    >
                        {/*IMAGE*/}
                        <div className=" relative overflow-hidden h-auto group/image-box">
                            <img src={project.image}
                            loading="lazy"
                             alt={project.title}
                             className={`w-full h-auto  transition-transform duration-5000 ease-in-out transform 
                                ${idx === 2
                                    ?"w-full h-auto  transition-transform duration-5000 ease-in-out transform group-hover/image-box:-translate-y-[calc(100%-256px)] "
                                    :"h-full object-cover group-hover/image-box:scale-110"
                                }`}
                            />

                            

                          
                            {/*OVERLAY LINKS*/}
                            <div className=" absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">

                                <a href={project.link} 
                                aria-label={`View ${project.title} live demo`}
                                
                                className="p-3 rounded-full glass  hover:text-(--color-primary) transition-all">
                                    <ArrowUpRight className="w-5 h-5"/>
                                </a>

                                <a href={project.github} className="p-3 rounded-full glass  hover:text-(--color-opposite) transition-all">
                                    <Github className="w-5 h-5" />
                                </a>

                            </div>    
                        </div>

                        {/*CONTENT*/}
                        <div className=" p-6 space-y-4">
                            <div className=" flex items-start justify-between">

                                <h3 className=" text-xl font-semibold group-hover:text-(--color-primary) transition-colors">
                                    {project.title}
                                   
                                </h3>
                                 <ArrowUpRight className=" w-5 h-5 text-(--color-muted-foreground) group-hover:text-(--color-primary) group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>

                            </div>
                            <p className={` text-sm {isLight ? "text-black" : "text-(--color-muted-foreground)" }`}>
                                {t(project.description)}
                            </p>
                            <div className=" flex flex-wrap gap-2">
                               {project.tags.map((tag, tagIdx) =>(
                                <span 
                                key={`${project.title}-tag-${tagIdx}`}
                                className=" px-4 py-1.5 rounded-full bg-(--color-surface) text-xs font-medium border border-(--color-border) text-(--color-muted-foreground) hover:border-(--color-primary)/50 hover:text-(--color-primary) transition-all duration-300 "> {tag}</span>
                               ))} 

                            </div>


                        </div>

                    </div>   
                    );
                })}

            </div>

            {/*VIEW ALL PROJECTS*/}
            <div className=" text-center mt-12 animate-fade-in">
                <a href="https://github.com/yadicim" target="_blank" 
                aria-label="github-all-projects-link"
                rel="noopener noreferrer">
                <AnimatedBorderButton >
                    {t('pro.button')}
                    <ArrowUpRight className=" w-5 h-5" />

                </AnimatedBorderButton>
                </a>
            </div>

        </div>
    </section> 
    );
}