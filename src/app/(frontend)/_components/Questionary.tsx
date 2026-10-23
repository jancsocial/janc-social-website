import { BsBoxArrowInDownLeft } from "react-icons/bs";


export default function Questionary(props:any) {
  let { reduceAction, triggerOpenCalendly } = props

  const dataTwoCol = [
    {id: "firstname", legend: "First Name*"},
    {id: "lastname", legend: "Last Name*"},
    {id: "email", legend: "Email*"},
    {id: "country", legend: "Country"}
  ]
  const dataOneCol = [
    {id: "mainfocus", legend: "How I can help you the most? Main focus*"},
    {id: "other", legend: "What else do I need to know about you?"}
  ]

  const handleReduceBtn = () => {
    console.log("handleReduceBtn")
    reduceAction()
  }

  const openCalendly = () => {
    openCalendly()
  }

  return (
    <>
      <div className="flex justify-between ">
        <p>Please fill out this form as honestly as possible. This form is fully confidential.</p>
        <button className=" cursor-pointer active:scale-95" onClick={() => handleReduceBtn()}>
          <BsBoxArrowInDownLeft size={20} className="[stroke-width:1.5] " />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 auto-rows-max">
        {
          dataTwoCol.map((field) => (
            <fieldset key={field.id} className="fieldset">
              <legend className="fieldset-legend">{field.legend}</legend>
              <input type="text" className="input" placeholder="" />
            </fieldset>
          ))
        }
        
      </div>
      <div className="flex flex-col">
        {
          dataOneCol.map((field) => (
            <fieldset key={field.id} className="fieldset w-full">
              <legend className="fieldset-legend">{field.legend}</legend>
              { field.id === 'mainfocus' ?
                  <textarea className="textarea h-24 w-full" placeholder=""></textarea> :
                  <input type='text' className="input w-full" placeholder="" />
              }
            </fieldset>
          ))
        }
        <button className="btn btn-accent" onClick={() => triggerOpenCalendly()} >CHOOSE AVAILABLE SLOTS</button>
      </div>
    </> 
)} 
