export interface Experience {
    index: number;
    title: string;
    company: string;
    description: string[];
    companyUrl?: string;
    companyLogo?: string;
    dateBegin: string;
    dateEnd?: string;
}
// add experience
        // experiences.forEach(experience=>{
        //     console.log(experience);
        //     addDoc(collection(db, 'experiences'), experience);
        // })