
function ProgressBar({list = []}) {

  let total = list.filter(x => x.state === true).length * (100 / list.length)
  if (!total) {
    total = 0;
  }

  return(
    <div className="barProgressContainer h-10 w-full
    border border-orange-200 bg-yellow-200 rounded-sm
    ">
    <div className="barProgress h-full bg-linear-to-r from-amber-900 via-amber-800 to-orange-500 duration-500 ease-in-out
    border rounded-sm border-none
"
    style={{
          width: `${total}%`,
        }}
    ></div>
  </div>
  )

}

export default ProgressBar;