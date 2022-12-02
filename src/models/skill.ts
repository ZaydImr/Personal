export interface Skill {
    title: string;
    icon: string;
    percentage: number;
    color: string
}

/** Adding new skills **/

            // setSkills([
            //       { title: 'Angular', icon: 'FaAngular', percentage: 85, color: '#B52E31' },
            //       { title: 'React', icon: 'FaReact', percentage: 70 },
            //       { title: 'NodeJs', icon: 'FaNodeJs', percentage: 85, color: '#68a063' },
            //       { title: 'Spring boot', icon: 'FaJava', percentage: 78, color: 'red' },
            //       { title: '.NET CORE API', percentage: 78, color: 'blue' },
            // ]);

            // await setDoc(doc(db,'skills', 'one'),{ title: 'NodeJs', icon: 'FaNodeJs', percentage: 85, color: '#68a063' });

            // skills.forEach( element => {
            //       addDoc(collection(db, 'skills'), element);
            // });