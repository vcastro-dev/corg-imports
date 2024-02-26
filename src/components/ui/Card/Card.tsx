type Props = {
  children: React.ReactNode;
};

export function Card({ children }: Props) {
  return (
    <div className="flex flex-col p-4 bg-white rounded-lg shadow-lg">
      {children}
    </div>
  );
}
