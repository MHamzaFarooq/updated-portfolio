function Heading(props: { primary: string; secondary: string }) {
  const { primary, secondary } = props;
  return (
    <div>
      <span className="font-retail text-[73px] tracking-[-8%] leading-[117%]">
        {primary}
      </span>
      <span className="font-swear text-[73px]"> {secondary}</span>
    </div>
  );
}

export default Heading;
