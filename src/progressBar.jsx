
function ProgressBar({list = []}) {
  console.log(list);

  let total = list.filter(x => x.state === true).length * (100 / list.length)
  if (!total) {
    total = 0;
  }

  return(
    <div className="barProgressContainer">
    <div className="barProgress"
    style={{
          width: `${total}%`,
          transition: "width 0.4s ease, background-color 0.3s ease"
        }}
    ></div>
  </div>
  )

}

export default ProgressBar;