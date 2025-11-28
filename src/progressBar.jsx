
function ProgressBar({list = []}) {
  console.log(list);

  let total = list.filter(x => x.state === true).length * (100 / list.length)
  if (!total) {
    total = 0;
  }

  return(
    <div className="barProgressContainer h-full w-full rotate-180
    border border-amber-300 rounded-sm
    col-span-3
    col-start-9
    row-span-5">
    <div className="barProgress w-full bg-amber-500 duration-500 ease-in-out
"
    style={{
          height: `${total}%`,
        }}
    ></div>
  </div>
  )

}

export default ProgressBar;