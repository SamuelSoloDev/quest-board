function FancyCheckbox({ checked, onChange, id = "fancy-checkbox" }) {
  return (
    <div className="relative  scale-x-[-1]">
      <label
        htmlFor={id}
        className="relative flex size-8 items-center justify-center overflow-hidden rounded-full
                   bg-[#c62828]
                   p-2 duration-100 hover:p-2.5 cursor-pointer"
      >
        <input
          type="checkbox"
          id={id}
          className="peer hidden"
          checked={checked}
          onChange={onChange}
        />

        {/* fondo negro que desaparece */}
        <div className="size-full rounded-full bg-black peer-checked:size-0"></div>

        {/* check largo */}
        <div
          className="absolute left-[1.3rem] h-[3px] w-3.5
                     -translate-y-10 translate-x-10 rotate-[-49deg]
                     rounded-sm bg-white duration-300
                     peer-checked:translate-x-[-9px] peer-checked:translate-y-1"
        ></div>

        {/* check corto */}
        <div
          className="absolute left-3 top-7 h-1 w-[19px]
                     -translate-x-10 -translate-y-10 rotate-58
                     rounded-sm bg-white duration-300
                     peer-checked:translate-x-[-11px] peer-checked:translate-y-[-13px]"
        ></div>
      </label>
    </div>
  );
}

export default FancyCheckbox;
