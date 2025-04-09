'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, Linkedin, Twitter, Globe, MapPin, Briefcase, GraduationCap, User, Languages, Phone, Home } from "lucide-react";
import { Language, translations, profileData, thProjects, thEducation } from "@/translations";

export default function ProfilePage() {
  const [currentLang, setCurrentLang] = useState<Language>("en");

  // Load saved language preference if available
  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage') as Language || 'en';
    setCurrentLang(savedLang);
    
    // เปลี่ยน lang attribute ตาม language ที่บันทึกไว้
    document.documentElement.lang = savedLang;
  }, []);

  const t = translations[currentLang];

  // Get the correct data based on language
  const profile = {
    ...profileData,
    name: currentLang === "en" ? profileData.name : t.name,
    title: currentLang === "en" ? profileData.title : t.title,
    bio: currentLang === "en" ? profileData.bio : t.bio,
    location: currentLang === "en" ? profileData.location : t.location,
    projects: currentLang === "en" ? profileData.projects : thProjects,
    education: currentLang === "en" ? profileData.education : thEducation,
  };

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "th" : "en";
    setCurrentLang(newLang);
    localStorage.setItem('preferredLanguage', newLang);
    
    // เปลี่ยน lang attribute เมื่อสลับภาษา
    document.documentElement.lang = newLang;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Language Switch Button */}
      <div className="fixed top-4 right-4 z-10">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleLanguage}
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
        >
          <Languages size={16} className="mr-2" />
          {currentLang === "en" ? "TH to EN" : "EN to TH"}
        </Button>
      </div>

      {/* Header / Hero Section */}
      <header className="bg-primary/10 py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">{profile.name}</h1>
              <p className="text-xl text-primary mt-2">{profile.title}</p>
              <p className="mt-4 text-muted-foreground max-w-2xl">{profile.bio}</p>

              <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                <Button variant="outline" size="sm" className="gap-2">
                  <MapPin size={16} />
                  {profile.location}
                </Button>
                <Button variant="outline" size="sm" asChild className="gap-2">
                  <a href={`mailto:${profile.email}`}>
                    <Mail size={16} />
                    {profile.email}
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="gap-2">
                  <a href={`tel:${profileData.phone}`}>
                    <Phone size={16} />
                    {profileData.phone}
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="gap-2">
                  <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-5xl py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User size={20} className="text-primary" />
                  {t.technicalSkills}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium text-sm mb-2 text-primary">{t.frontend}</h3>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-sm mb-2 text-primary">{t.backend}</h3>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.backend.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-sm mb-2 text-primary">{t.toolsTech}</h3>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.tools.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-sm mb-2 text-primary">{t.otherLang}</h3>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.other.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User size={20} className="text-primary" />
                  {t.softSkills}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-1">
                  {profileData.softSkills.map((skill, index) => (
                    <li key={index} className="text-sm">{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages size={20} className="text-primary" />
                  {t.languages}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {profileData.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="font-medium">{lang.language}</span>
                    <span className="text-muted-foreground">{lang.level}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail size={20} className="text-primary" />
                  {t.contact}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Phone size={16} className="mt-1 text-primary" />
                  <span className="text-sm">{profileData.phone}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail size={16} className="mt-1 text-primary" />
                  <span className="text-sm">{profileData.email}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Github size={16} className="mt-1 text-primary" />
                  <a href={`https://github.com/${profileData.github}`} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
                    github.com/{profileData.github}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Home size={16} className="mt-1 text-primary" />
                  <span className="text-sm">{profileData.address}</span>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap size={20} className="text-primary" />
                  {t.education}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {profile.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-bold">{edu.institution}</h3>
                    <p className="text-sm text-muted-foreground">{edu.degree}</p>
                    <p className="text-xs text-muted-foreground">{edu.duration}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area - Fix: Moving this inside the grid */}
          <div className="md:col-span-2 space-y-8">
            {/* Projects Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Briefcase size={24} className="text-primary" />
                  {t.projectsHighlight}
                </CardTitle>
                <CardDescription>{currentLang === "en" ? "Academic projects I've worked on" : "โปรเจคที่ฉันเคยทำในระหว่างเรียน"}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {profile.projects.map((project, index) => (
                  <div key={index} className={index < profile.projects.length - 1 ? "border-b border-border pb-6 mb-6" : ""}>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-lg text-primary">{project.title}</h3>
                      <Button variant="link" asChild size="sm" className="p-0 h-auto text-primary">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-1" />
                          {t.viewProject}
                        </a>
                      </Button>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary/5 py-6 mt-12">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {profile.name}. {t.allRightsReserved}</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href={`mailto:${profile.email}`} aria-label="Email" className="text-muted-foreground hover:text-primary">
                <Mail size={20} />
              </a>
              <a href={`tel:${profileData.phone}`} aria-label="Phone" className="text-muted-foreground hover:text-primary">
                <Phone size={20} />
              </a>
              <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}