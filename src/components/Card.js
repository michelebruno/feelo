export default function Card({ children, centered }) {
  return (
    <div className="rounded bg-primary card-grid text-light row justify-content-center align-items-center my-5 py-5">
      {children}
    </div>
  );
}
