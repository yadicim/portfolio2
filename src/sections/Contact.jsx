import { Mail, Phone, MapPin , Send, CheckCircle, AlertCircle} from "lucide-react";
import {Button} from "@/components/Button"
import { useState } from "react";
import emailjs from "@emailjs/browser"
import { useContext } from "react";
import { ThemeContext } from "@/Context"; 

const contactInfo = [
    {
        icon:Mail,
        label:"Email",
        value:"yadigar.benli@gmail.com",
        href:"mailto:yadigar.benli@gmail.com",
    },

     {
        icon:Phone,
        label:"Phone",
        value:"+358 46 593 31 54",
        href:"tel:+358465933154",
    },

    {
        icon:MapPin,
        label:"Location",
        value:"Oulu/Finland",
        href:"#"
    },

    
];


export const Contact = ()=>{
    const theme = useContext(ThemeContext);
    const isLight = !theme.state.lightMode;
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubsmitStatus] = useState ({
        type: null,
        message: "",
    });

    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsLoading(true);
        setSubsmitStatus({ type: null, message: ""});
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey){
                throw new Error (
                    "EmailJS configuration is missing. Please check your enviremen variables."
                )
            }

            await emailjs.send(serviceId, templateId, {
                name:formData.name ,
                email: formData.email ,
                message: formData.message ,
            },
            publicKey);

            setSubsmitStatus({
                type: "success",
                message:"Message sent seccesfully! I'll get back to you soon.",
            });
            setFormData ({ name: "", email: "", message: ""});          


        } catch (error) {
            console.error("EmailJS error:", error);
            setSubsmitStatus({
                type: "error",
                message: 
                error.text || "Failed to send message. Please try again later.",
            });

        } finally {
            setIsLoading(false)
        }
    };
    return (

    <section id="contact"
        className="py-32 relative overflow-hidden ">
        
            <div className=" absolute top-0 left-1/4 w-96 h-96 
                    bg-(--color-primary)/5 rounded-full blur-3xl ">
                    
                    <div className=" absolute bottom-1/4 right-1/4 w-64 h-64 bg(--color-highlight)/5 rounded-full blur-3xl"></div>
            </div>        
            <div className=" container mx-auto px-4 md:px-6 relative z-10 ">
            

                {/*HEADER SECTION*/}
                <div className=" text-center mx-auto max-w-3xl mb-16">
                    <span className=" text-(--color-secondary-foreground) text-sm font-medium tracking-wider uppercase animate-fade-in ">Get In Touch</span>
                    <h2 className=" text-(--color-opposite) text-3xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
                    Lets build
                    <span className="font-serif italic font-normal text-white">  something great.
                    </span>
                    </h2>
                    <p className="text-(--color-muted-foreground) animate-fade-in animation-delay-200">
                    Have a project or idea in mind? Feel free to get in touch 
                    — I’m open to learning, collaboration, and potential job opportunities.

                    </p>

                </div>
                
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto ">
                    <div className="glass p-6 md:p-6 rounded-3xl border border-(--color-primary)/30 animate-fade-in animation-delay-300">
                        <form className=" space-y-6 " onSubmit={handleSubmit} >
                            <div >
                                <label htmlFor="name" className=" block text-sm font-medium mb-2 " >Name</label>
                                <input id="name" type="text" 
                                required
                                placeholder="Your name"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({...formData, name: e.target.value})

                                }
                                className=" w-full px-4 py-3 bg-(--color-surface) rounded-xl border border-(--color-border) focus:border-(--color-opposite)  outline-none transition-all" />
                            </div>

                             <div>
                                <label htmlFor="email" className=" block text-sm font-medium mn-2">Email</label>
                                <input id="email" type="email" 
                                required
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({...formData, email: e.target.value})

                                }
                                className=" w-full px-4 py-3 bg-(--color-surface) rounded-xl border border-(--color-border) focus:border-(--color-opposite) outline-none transition-all"/>
                            </div>

                             <div>
                                <label htmlFor="message" className=" block text-sm font-medium mb-2">Message</label>
                                <textarea id="message" rows={4}
                                required                                
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({...formData, message: e.target.value})

                                }
                                
                                className=" w-full px-4 py-3 bg-(--color-surface) rounded-xl border border-(--color-border) focus:border-(--color-opposite) outline-none transition-all"/>
                            </div>
                            <Button className=" w-full text-black" type="submit" disabled={isLoading} >
                               { isLoading ? (

                                 <>Sending...</>

                               ) : (
                                <> Send Message
                                <Send className=" w-5 h-5" /> 
                                </>
                                )
                                }

                            </Button>

                            { submitStatus.type && (
                                <div className={` flex items-center gap-3 p-4 rounded-xl ${
                                    submitStatus.type === "success"
                                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                                }`}>
                                    {submitStatus.type === "success" ? (
                                        <CheckCircle className="w-5 h-5 shrink-0"/>
                                    ) : (
                                        <AlertCircle className="w-5 h-5 shrink-0"/>
                                    )}
                                    <p className=" text-sm">{submitStatus.message}</p>

                                </div>
                            )}

                        </form>
                    </div>

                    {/*CONTACT INFO */}
                    <div className=" space-y-6 animate-fade-in animation-delay-400">
                        <div className="glass rounded-3xl p-6 md:p-8">
                            <h3 className=" text-xl font-semibold mb-6">
                                Contact Information
                            </h3>
                            <div className=" space-y-4">
                                {contactInfo.map((item,i)=>(
                                    <a 
                                        key={i}
                                        href={item.href}
                                        className=" flex items-center gap-4 p-4 rounded-xl hover:bg-(--color-surface) transition-colors group"
                                    >
                                    <div className=" w-12 h-12 rounded-xl bg-(--color-primary)/10 flex items-center justify-center group-hover:bg-(--color-primary)/20 transition-colors">
                                        <item.icon className=" w-5 h-5 text-(--color-primary)"/>
                                    </div>
                                    <div>
                                        <div className={` ${isLight ? "text-white" : "text-(--color-muted-foreground)" }`}>
                                            {item.label}

                                        </div>
                                        <div className=" font-medium">{item.value}</div>
                                    </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/*AVAILABITY CARD*/}
                        <div className=" glass rounded-3xl p-6 md:p-8 border border-(--color-opposite)/30">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                                    <span className=" font-medium"> Currently Avaible </span>
                                </div>
                                <p className={` ${isLight ? "text-white" : "text-(--color-muted-foreground)" }`}>
                                    I’m currently open to new opportunities and learning-focused projects.
                                     Whether it’s a junior role, internship, or collaboration, feel free to get in touch.
                                </p>
                        </div>
                    </div>

                </div>
                
                    
            </div>
            
    </section>

    );
};