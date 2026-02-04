import { useContext } from "react";
import { ThemeContext } from "@/Context"; 

const experiences = [

    {
        period: "Apr 2025 – Jun 2025",
        role: "Coding Instructor Intern",
        company: "Kodarit, Koodikaverit Oy",
        description:
        " Completed an internship teaching children coding using Unity, Scratch, JavaScript, and Python. Assisted learners with programming tasks and gained practical experience in programming education and age-appropriate instruction.",
       
    },

    {
        period: "Apr 2023 – Jun 2023",
        role: "Programming Intern",
        company: "Diginikkari, Business Asema, Oulu",
        description:
            "Completed a practical internship introducing the Python programming language through various programming exercises. Gained experience in 3D printing and laser cutting, combining software skills with hands-on digital fabrication techniques.",
        
    },


    {
        period: "Mar 2018 – Apr 2019",
        role: "Patent Infringement Legal Advisor",
        company: "Yalciner Patent, Turkey",
        description:
            "Provided legal advice and guidance on patent infringement investigations. Core competencies included strong knowledge of legislation and legal substance, leadership skills, analytical thinking, motivating and inspiring others, and demonstrating high-level initiative and creativity in challenging legal cases.",
        
    },

    {
        period: "Jul 2016 – Feb 2017",
        role: "Investigating Judge",
        company: "4th Civil Law Chamber of the Supreme Court, Turkey",
        description:
            "Investigated civil law compensation cases involving physical and psychological injuries, conducted interviews, analyzed judicial data systems, and prepared recommendations for the higher court. Developed strong analytical, problem-solving, time management, and communication skills.",
      
    },
    {
        period: "Mar 2015 – Jul 2016",
        role: "Judge",
        company: "Hendek Court, Turkey",
        description:
            "Served as a civil law judge handling compensation, divorce, real estate, and debt cases. Reviewed legal documents, prepared written justifications, issued decisions, and communicated rulings to involved parties, developing strong analytical, problem-solving, time management, and interpersonal skills.",
        
    },

    {
        period: "Nov 2013 – Mar 2015",
        role: "Judicial Trainee",
        company: "Ankara Court, Turkey",
        description:
            "Completed a judicial traineeship covering criminal and civil law, gaining broad practical experience in court operations across varied shifts, while developing strong analytical, organizational, communication, and attention-to-detail skills..",
       
    },
    {
        period: "Aug 2012 - Nov 2013",
        role: "Research Assistant",
        company: "Afyon Kocatepe University, Faculty of Law, Turkey",
        description:
            "Assisted legal researchers with statistical, qualitative, and quantitative analyses, managing and visualizing research data for academic publications while developing strong research, analytical, and legislative knowledge skills.",
       
    },
    
    ];

    export const Experience = () => {
        const theme = useContext(ThemeContext);
        const isLight = !theme.state.lightMode;
         return (
             <section
             id="experience"
             className="py-32 relative overflow-hidden">
                <div className=" absolute top-1/2 left-1/4 w-96 h-96 
                  bg-(--color-primary)/5 rounded-full blur-3xl -translate-y-1/2">
                    
                </div>

                <div className=" container mx-auto px-6 relative z-10">
                    {/*SECTION HEADER*/}
                    <div className=" max-w-3xl mb-16">
                        <span className="text-(--color-primary) text-sm font-medium tracking-wider uppercase animate-fade-in "> Career Journey</span>
                        <h2 className=" text-(--color-opposite) text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
                            Experience that<span className="font-serif italic font-normal text-white"> speaks volumes. </span>
                        </h2>
                        <p className="text-(--color-muted-foreground) animate-fade-in animation-delay-200">
                            A timeline of my interdisciplinary professional journey, combining law and software development.
                        </p>

                    </div>

                    {/*TIMELINE*/}
                    <div className=" relative">
                        <div className=" timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-(--color-primary)/70 via-(--color-primary)/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(76,255,154,0.8)]"/>
                        
                        {/*EXPERIENCE ITEMS*/}
                        <div className=" space-y-12">
                            {experiences.map((exp, idx) =>(
                                <div key={idx} className=" relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                style={{ animationDelay: `${(idx +1)*150}ms`}}
                                >

                                    {/*TIMELINE DOT */}
                                    <div className=" absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-(--color-primary) rounded-full -translate-x-1/2 ring-4 ring-(--color-opposite) z-10 ">

                                    </div>

                                    {/*CONTENT*/}
                                    <div className={`pl-8 md:pl-0 ${idx % 2 === 0 
                                        ? "md:pr-16 md:text-right"
                                        : " md:col-start-2 md:pl-16"
                                        }`}>
                                        <div className={` glass p-6 rounded-2xl border border-(--color-opposite)/40 hover:border-(--color-opposite)/80 transition-all duration-500`}>
                                            <span className=" text-sm text-(--color-primary) font-medium">{exp.period}</span>
                                            <h3 className=" text-xl font-bold mt-2">{exp.role}</h3>
                                            <p className={` ${isLight ? "text-white" : "text-(--color-muted-foreground)" }`}>{exp.company}</p>
                                            <p className={` text-sm ${isLight ? "text-black" : "text-(--color-muted-foreground)" }`}>{exp.description}</p>

                                        </div>

                                    </div>


                                </div>
                            ))}

                        </div>

                        

                    </div>


                </div>

             </section> 
        );

    };


   
