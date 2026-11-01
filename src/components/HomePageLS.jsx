import Filter from "./Filter";
import MemberExclusive from "./MemberExclusive";

export default function HomePageLS() {
  return (
    <div className="flex flex-col gap-10 ">
      <Filter />
      <MemberExclusive />
    </div>
  );
}
