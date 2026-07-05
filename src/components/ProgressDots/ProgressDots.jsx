import "./ProgressDots.css";

function ProgressDots({ current }) {

  return (

    <div className="dots">

      {[0,1,2].map((dot)=>(
        <span
        key={dot}
        className={
          current===dot
          ? "dot active"
          : "dot"
        }
        />
      ))}

    </div>

  );

}

export default ProgressDots;