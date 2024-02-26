type Props = {
  children: React.ReactNode;
};

export function Card({ children }: Props) {
  return (
    <div className="flex flex-col p-4 bg-white rounded-lg shadow-lg">
      {children}
      {/* <img
        src={image}
        alt={title}
        className="w-64 h-64 object-cover rounded-full"
      />
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-lg text-center">{description}</p> */}
    </div>
  );
}
