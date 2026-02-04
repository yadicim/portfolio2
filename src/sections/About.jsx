import { Code2Icon, LightbulbIcon, PuzzleIcon, UsersIcon } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "@/Context"; 

const highlights =[
    {
        icon: Code2Icon,
        title : "Well-Structured Code",
        description: "Code that follows a logical structure, improves readability, and supports long-term maintainability."

    },

    {
        icon: LightbulbIcon,
        title : "Simple & Effective Solutions",
        description: "A structured and analytical approach to breaking down complex problems and finding practical, effective solutions."

    },

    {
        icon: PuzzleIcon,
        title : "Problem-Solving Mindset",
        description: "A structured and analytical approach to breaking down complex problems and finding practical, effective solutions."

    },

    {
        icon: UsersIcon,
        title : "Effective Collaboration",
        description: "An organized and respectful approach to teamwork, supported by clear communication and mutual understanding."

    },

]

export const About = ()=>{
    const theme = useContext(ThemeContext);
    const isLight = !theme.state.lightMode;
    return (
    <section id="about" className="py-32 relative overflow-hidden" >
        <div className="container mx-auto px-6 relative z-10">
            <div className=" grid lg:grid-cols-2 gap-16 items-center">
                {/*LEFT COLUMN*/}
                <div className=" space-y-8" >
                    <div className=" animate-fade-in">
                        <span className=" text-(--color-primary) text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>
                    <h2 className="  font-serif text-xl  italic font-bold leading-tight animate-fade-in animation-delay-100 text-white ">
                    Bridging Law and Technology <span className=" not-italic text-4xl font-matrix text-(--color-opposite) ">through code.
                    </span>
                    </h2>
                    <div className="space-y-4 text-(--color-muted-foreground) animate-fade-in animation-delay-200" >
                        <p>
                            I come from a law background and am currently transitioning into software development,
                             where I combine analytical thinking with technical problem-solving.
                              My interest in programming grew from a desire to understand 
                              how digital systems are built and how logic turns into real, usable products.
                        </p>
                        <p>
                            I have experience working with HTML, CSS, JavaScript, React, Bootstrap, jQuery, 
                            C, Python, PHP, and SQL. I enjoy writing clear, structured code and building applications 
                            that are practical, maintainable, and focused on real needs rather than complexity
                             for its own sake.
                        </p>
                        <p>
                            Outside of development, I focus on improving my skills through continuous learning, 
                            hands-on projects, and exploring different areas of software development to strengthen 
                            my technical foundation.
                        </p>

                    </div>

                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300" >
                        <p className="text-lg font-medium italic text-(--color-foreground)" >
                            My focus is on creating well-structured and reliable digital solutions, 
                            shaped by analytical thinking and attention to detail.

                        </p>

                    </div>
                </div>
                {/*RIGHT COLUMN*/}
                <div className=" grid sm:grid-cols-2 gap-6 lg:pt-28  ">
                    {highlights.map((item, idx) => (
                        <div key={idx} className="glass p-6 rounded-2xl animate-fade-in " 
                        style={{animationDelay: `${(idx +1 )* 100 }ms`}}
                        >
                            <div className="w-12 h-12 rounded-xl bg-(--color-primary)/10 flex items-center justify-center mb-4 hover:bg-(--color-primary)/20" > 
                                < item.icon className="w-6 h-6 text-(--color-primary)" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2" >{item.title}</h3>
                            <p className={` text-sm {isLight ? "text-black" : "text-(--color-muted-foreground)" }`}  >{item.description}</p>

                        </div>
                            

                    ))}

                </div>

            </div>
        </div>
    </section>
    );
};
