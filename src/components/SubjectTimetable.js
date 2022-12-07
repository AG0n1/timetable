import SubjectTeacher from '../subjectInfo/SubjectTeacher'
import SubjectAuditorium from '../subjectInfo/SubjectAuditorium'
import SubjectType from '../subjectInfo/SubjectType'
import SubjectSubgroup from '../subjectInfo/SubjectSubgroup'

function SubjectTimetable() {

    const groups = [
        {
            id: 1,
            name: 'Дифференциальные уравнения'
        },
        
        {
            id: 2,
            name: 'Основы и методологии программирования'
        },
        
        {
            id: 3,
            name: 'Промышленное программмирование'
        },
        
        {
            id: 4,
            name: 'Операционные системы'
        },
        
        {
            id: 5,
            name: 'Числовые и функциональные ряды'
        },
        
        {
            id: 6,
            name: 'Несобственные интегралы'
        },
        
        {
            id: 7,
            name: 'Алгоритмы и структуры данных'
        }
    ]

    return ( 
    <div> 
        {
            groups
            .map((group, index) => {
                return <div className = "subject" >
                            <div 
                             className = "subjectName"
                             key = { index }
                             value = { group.id }
                            > 
                                 { group.name } 
                            </div>
                            
                            <div className ="subjectInfo">
                                <SubjectTeacher />
                                <SubjectAuditorium />
                                <SubjectType />
                                <SubjectSubgroup />
                            </div>
                        </div>
            })
        } 
    </div>
    )
}

export default SubjectTimetable
