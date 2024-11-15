const SecondaryBtn = ({ label }: { label: string }) => {
  return (
    <button className="rounded-lg bg-[#000] p-2 text-[21px] leading-[31px] text-[#fff] shadow-[4px_4px_0px_0px_#17EB1F]">
      {label}
    </button>
  );
};

export default SecondaryBtn;
