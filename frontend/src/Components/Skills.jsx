export function Skills(){
    return <div className = "bg-gray-200 h-50"> 
        <div className = "flex justify-center py-6 font-extrabold font-serif text-4xl">
            SKILLS
        </div>
        <div className = "flex justify-around px-6 py-6">
        <div>
            <div className="text-2xl font-serif font-bold">Languages
            </div>
            <br></br>
            <ul className = "py-2 text-center text-xl font-serif font-medium">
                <li>C/C++</li>
                <br></br>
                <li>JavaScript</li>
                <br></br>
                <li>TypeScript</li>
            </ul>
            </div>
            
        
        <div>
            <div className="text-2xl font-serif font-bold">Frontend</div>
            <ul className = "py-2 text-center text-xl font-serif font-medium">
                <br></br>
                <li>ReactJS</li>
                <br></br>
                <li>Tailwind.CSS</li>
                <br></br>
                <li>Bootstrap</li>
            </ul>
        </div>
        <div>
            <div className="text-2xl font-serif font-bold">Backend</div>
            <ul className = "py-2 text-center text-xl font-serif font-medium">
                <br></br>
                <li>NodeJS</li>
                <br></br>
                <li>ExpressJS</li>
            </ul>
        </div>
        <div>
            <div className="text-2xl font-serif font-bold">Databases</div>
            <ul className = "py-2 text-center text-xl font-serif font-medium">
                <br></br>
                <li>NoSQL: MongoDB</li>
                <br></br>
                <li>SQL: PostgreSQL</li>
                <br></br>
                <li>ORM: Prisma</li>
            </ul>
        </div>
        </div>
    </div>
}