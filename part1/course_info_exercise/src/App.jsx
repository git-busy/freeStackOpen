const Header = (props) => (
    <h1>{props.course.name}</h1>
)

const Part = (props) => {
  return <p>{props.part.name} {props.exercise.exercises}</p>
}
  

const Content = (props) => {
  return (
  <div>
    <Part part={props.parts[0]} exercise={props.parts[0]} />
    <Part part={props.parts[1]} exercise={props.parts[1]} />
    <Part part={props.parts[2]} exercise={props.parts[2]} />
  </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises[0].exercises + props.exercises[1].exercises + props.exercises[2].exercises}</p>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total exercises={course.parts}/>
    </div>

  )
}

export default App