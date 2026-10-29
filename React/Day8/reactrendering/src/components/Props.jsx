import logo from "../assets/react.svg"
const Props = ({data}) => {


  return (
    <>
    <div>
      <div className="bg-gray-300 flex  flex-wrap  p-10 justify-between items-center">
        {data.map((e,i)=>(
          <div key={i} className="bg-white p-5 w-50 flex  flex-col  rounded-2xl gap-3 ">
            <img src={logo}  className="h-20"/>
            <h2>S.NO.{e.id}</h2>
            <h2>Course Name:{e.course}</h2>
            <h2>Prize:{e.Prize}</h2>
            <button className="bg-red-300 p-2 w-30 rounded-2xl mx-4">BUY NOW</button>

          </div>
        ))}
      </div>
    </div>

    </>
  )
}

export default Props
