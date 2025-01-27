const Course = ({ course }) => {
    const total = course.parts.reduce((s, p) => s + p.exercises, 0);

    return ( 
    <div>
        <h2>{course.name}</h2>
        <div>
        {course.parts.map((part) => (
          <p key={part.id}>{part.name} {part.exercises}</p>
        ))}
        <p><strong>Total exercises: {total}</strong></p>
        </div>
    </div>
    )
}

export default Course