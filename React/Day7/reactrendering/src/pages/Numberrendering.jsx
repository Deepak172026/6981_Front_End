
const Numberrendering = () => {

  let topic = "The Solar System"
  let num1 = 8;
  let num2 = 7;
  let num3 = 12;
  let num4 = 24;
  let num5 = 7;

  return (
    <>
    <div className="p-8 flex flex-col gap-4">
      <div>
        <h1><strong>Topic:</strong> {topic}</h1>
      </div>
      <div className="mx-10">
         <ul className="list-disc">
          <li>Number of planets: {num1}</li>
           <li>Number of days in a week: {num2}</li>
          <li>Number of months in a year: {num3}</li>
          <li>Number of hours in a day: {num4}</li>
            <li>Number of continents: {num5}</li>
         </ul>
      </div>

    </div>
    </>
  )
}

export default Numberrendering
