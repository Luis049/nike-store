type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return (
    <>
      <div className="grid items-center">
        <h1
          className="text-5xl lg:text-4xl
          mdm:text-3xl font-bold
          text-slate-900 filter 
          drop-shadow-log "
        >
          {title}
        </h1>
      </div>
    </>
  );
};

export default Title;
