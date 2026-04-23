
import { Button } from "@/components/Button";

import { Menu, X } from "lucide-react";

import { useEffect, useState, useContext } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { ThemeContext } from "@/Context";

import { useTranslation } from "react-i18next";
export const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [search, setSearch] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const theme = useContext(ThemeContext);
    const isLight = !theme.state.lightMode;

    const navLinks = [
        { href: "#about", label: t('navbar.about') },
        { href: "#projects", label: t('navbar.projects') },
        { href: "#experience", label: t('navbar.experience') },
    ];

    const clickHandle = (lang) => {
        i18n.changeLanguage(lang).catch(err => console.error(err));
    };

    const languages = [
        { code: 'en', label: 'En', flag: 'https://flagcdn.com/w40/gb.png' },
        { code: 'fi', label: 'Fi', flag: 'https://flagcdn.com/w40/fi.png' },
        { code: 'tr', label: 'Tr', flag: 'https://flagcdn.com/w40/tr.png' },
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    }, [isMobileMenuOpen]);

    return (
        <header className={`fixed top-0 left-0 right-0 transition-all duration-500 z-50 ${
            isScrolled ? "glass-strong py-3 shadow-md" : "bg-transparent py-5"
        }`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                
                {/* LOGO */}
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
                    Yadigar Arslan
                </a>

                {/* Desktop Nav - md:hidden hatası düzeltildi */}
                <div className="hidden md:flex items-center gap-8">
                    {/* Language Section */}
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-2">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => clickHandle(lang.code)}
                                className={`px-4 py-2 text-sm flex items-center gap-2 rounded-full transition-all cursor-pointer ${
                                    i18n.language === lang.code
                                        ? "bg-(--color-surface) text-(--color-foreground)"
                                        : `hover:bg-(--color-surface)/50 ${isLight ? "text-black" : "text-(--color-muted-foreground)"}`
                                }`}
                            >
                                <img src={lang.flag} alt={lang.code} className="w-4 h-4 rounded-full object-cover" />
                                {lang.label}
                            </button>
                        ))}
                    </div>

                    {/* Nav Links Section */}
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-4">
                        {navLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                className={`px-4 py-2 text-sm rounded-full transition-colors hover:bg-(--color-surface) ${
                                    isLight ? "text-black" : "text-(--color-muted-foreground)"
                                }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center space-x-4 md:space-x-6">
                    {/* Search - md:flex hatası düzeltildi */}
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        if (search.trim()) window.find(search);
                    }}>
                        <div className="hidden md:flex group border-r px-4 py-1 border-primary/30 items-center">
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder={t('navbar.search')}
                                className="opacity-0 group-hover:opacity-100 bg-transparent border-b border-primary focus:outline-none w-0 group-hover:w-20 lg:group-hover:w-32 transition-all duration-500 text-sm"
                            />
                            <button type="submit" className="p-2 cursor-pointer">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </form>

                    {/* Contact Button */}
                    <Button
                        size="sm"
                        className="hidden md:block bg-gradient-to-r from-[#4CFF9A] to-[#ff0088] text-black font-bold border-none"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        {t('navbar.contact_me')}
                    </Button>

                    {/* ✅ DÜZELTİLEN BUTON: Eksik açılış etiketi eklendi */}
                    <button 
                        className="md:hidden p-2 z-[60] relative cursor-pointer"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden glass-strong animate-in fade-in duration-300">
                    <div className="container mx-auto px-6 py-24 flex flex-col gap-6">
                        {navLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-xl font-medium px-4 py-3 rounded-xl hover:bg-(--color-surface) transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        
                        <div className="grid grid-cols-3 gap-3 mt-4">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        clickHandle(lang.code);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`py-3 rounded-xl glass border border-white/10 text-sm font-bold uppercase transition-all ${
                                        i18n.language === lang.code ? "bg-primary text-black" : ""
                                    }`}
                                >
                                    {lang.code}
                                </button>
                            ))}
                        </div>

                        <Button
                            className="mt-6 py-6 bg-gradient-to-r from-[#4CFF9A] to-[#ff0088] text-black font-extrabold text-lg"
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                setTimeout(() => {
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }, 300);
                            }}
                        >
                            {t('navbar.contact_me')}
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
};
