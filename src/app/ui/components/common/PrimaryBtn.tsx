const PrimaryBtn = ({ label }: { label: string }) => {
  return (
    <button className="rounded-lg bg-[#17EB1F] p-2 text-[21px] leading-[31px] text-[#000000] shadow-[4px_4px_0px_0px_#000]">
      {label}
    </button>
  );
};

export default PrimaryBtn;
